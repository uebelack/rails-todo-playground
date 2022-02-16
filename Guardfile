# frozen_string_literal: true

guard :minitest do
  watch(%r{^app/(.+)\.rb$})                               { |m| "test/#{m[1]}_test.rb" }
  watch(%r{^app/controllers/application_controller\.rb$}) { 'test/controllers' }
  watch(%r{^app/controllers/(.+)_controller\.rb$})        { |m| "test/controllers/#{m[1]}_test.rb" }
  watch(%r{^app/views/(.+)_mailer/.+})                    { |m| "test/mailers/#{m[1]}_mailer_test.rb" }
  watch(%r{^lib/(.+)\.rb$})                               { |m| "test/lib/#{m[1]}_test.rb" }
  watch(%r{^test/.+_test\.rb$})
  watch(%r{^test/test_helper\.rb$}) { 'test' }
end

guard :livereload do
  extensions = {
    css: :css,
    scss: :css,
    sass: :css,
    js: :js,
    html: :html,
    png: :png,
    gif: :gif,
    jpg: :jpg,
    jpeg: :jpeg
  }

  rails_view_exts = %w[erb]

  compiled_exts = extensions.values.uniq
  watch(%r{public/.+\.(#{compiled_exts * '|'})})

  extensions.each do |ext, type|
    watch(%r{
          (?:app|vendor)
          (?:/assets/\w+/(?<path>[^.]+) # path+base without extension
           (?<ext>\.#{ext})) # matching extension (must be first encountered)
          (?:\.\w+|$)
          }x) do |m|
      path = m[1]
      "/assets/#{path}.#{type}"
    end
  end

  watch(%r{app/views/.+\.(#{rails_view_exts * '|'})$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{app/javascript/.+\.js})
  watch(%r{config/locales/.+\.yml})
end
