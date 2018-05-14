Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  root to: 'public/landing#index'
  resources :graphql, only: %i[create], controller: :graph_ql

  namespace :admin do
    root to: 'schedule#index'

    post 'prints/trigger_generation',
         controller: 'trigger_print_generation',
         action: :create,
         as: :prints_trigger_generation

    resource :schedule, only: %i[index]
    resources :cliparts, except: %i[show]
    resources :cupcake_types, except: %i[show]
    resources :fonts, except: %i[show]
    resources :colors, except: %i[show]
    resources :building_types, except: %i[show]
    resources :industries, except: %i[show]
    resources :orders
    resources :prints, only: %i[index show]
    resources :promotion_codes
  end

  scope module: 'public' do
    get '*path', controller: 'landing', action: :index, as: :landing
  end
end
