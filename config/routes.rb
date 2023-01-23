Rails.application.routes.draw do
  root 'greeting#index'

  resources :greet, only: [:index]
end
