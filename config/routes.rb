Rails.application.routes.draw do
  resources :barrels
  resources :firearms
  resources :outings



  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'pages#index'

  get 'firearms/:id/next', to: 'firearms#next'
end
