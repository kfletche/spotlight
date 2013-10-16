require 'capybara/cucumber'
require 'capybara/poltergeist'
require 'rspec/expectations'

Capybara.default_driver = :poltergeist
Capybara.app_host = 'http://localhost:3000'
Capybara.run_server = false
