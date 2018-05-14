# frozen_string_literal: true

module Admin
  class ResourcefulController < AdminController
    attr_accessor :record
    attr_accessor :collection
    attr_accessor :query

    def index
      self.query = scope.ransack(params[:q])
      self.collection =
        query
        .result(distinct: true)
        .order(order_arguments)
        .page(params[:page] || 1)
      authorize(collection)
    end

    def show
      self.record = load_record
      authorize(record)
    end

    def new
      self.record = model_class.new
      authorize(record)
    end

    def create
      self.record ||= model_class.new(permitted_params)
      authorize(record)
      if record.save
        flash[:success] = 'Saved!'
        redirect_to after_create_path
      else
        flash[:alert] = 'Failed to create new record.'
        render 'new'
      end
    end

    def edit
      self.record = load_record
      authorize(record)
    end

    def update
      self.record = load_record
      record.attributes = permitted_params
      if record.save
        flash[:success] = 'Updated!'
        redirect_to after_update_path
      else
        flash[:alert] = 'Failed to update record.'
        render 'edit'
      end
    end

    def destroy
      self.record = load_record
      flash[:success] = 'Deleted!'
      record.destroy
      redirect_to after_destroy_path
    end

    private

    def load_record
      scope.find(params[:id])
    end

    def scope
      policy_scope(model_class)
    end

    def model_class
      @model_class ||= model_name.safe_constantize
    end

    def model_name
      @model_name ||= begin
        klass_name =  self.class.to_s
        plural_model_name = klass_name.gsub(/.*::/, '').gsub(/Controller$/, '')
        plural_model_name.singularize
      end
    end

    def permitted_params
      return {} unless params[params_root_key].present?
      params.require(params_root_key).permit(permitted_param_attributes)
    end

    def params_root_key
      model_name.underscore.parameterize(separator: '_')
    end

    def permitted_param_attributes
      policy(record || model_class.new).try(:permitted_attributes) || []
    end

    def order_arguments
      {
        created_at: :desc
      }
    end

    def after_create_path
      [:edit, :admin, record]
    end

    def after_update_path
      after_create_path
    end

    def after_destroy_path
      [:admin, params_root_key.pluralize.to_sym]
    end
  end
end
