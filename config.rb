set :css_dir,    'assets/stylesheets'
set :js_dir,     'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir,  'assets/fonts'

set :layouts_dir,  'templates/layouts'
set :partials_dir, 'templates/partials'

compass_config do |config|
  config.output_style = :nested
  # Temporarily disabling warnings to suppress "interpolation near operators"
  # noise from _deprecated-support.scss. Recheck when Compass is upgraded.
  config.disable_warnings = true
end

helpers do
  def strip_byte_order_mark(str)
    str.sub("\xEF\xBB\xBF".force_encoding('UTF-8'), '')
  end

  def inline_stylesheet(name)
    strip_byte_order_mark(
      sprockets["#{name}.css"].to_s.strip
    )
  end

  def inline_javascript(name)
    sprockets["#{name}.js"].to_s.strip
  end
end

configure :build do

  compass_config do |config|
    config.output_style = :compressed
    config.line_comments = false
  end

  helpers do
    def inline_javascript(name)
      require 'uglifier'
      Uglifier.compile(
        sprockets["#{name}.js"].to_s.strip,
        output: { comments: :none }
      )
    end
  end

  ignore 'templates/layouts/*'
  ignore 'templates/partials/*'

  set :haml, ugly: true

  activate :relative_assets
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash

  activate :minify_html do |html|
    html.remove_input_attributes = false
    html.remove_intertag_spaces = false
  end
end
