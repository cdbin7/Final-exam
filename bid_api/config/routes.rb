Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auctions do
        resources :bids, only: [:create]
      end
      resource :session, only: [:create, :destroy]
    end
  end

end
