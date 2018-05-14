# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180404125359) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "building_types", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.boolean "ask_for_doorman", default: false, null: false
    t.index ["deleted_at"], name: "index_building_types_on_deleted_at"
  end

  create_table "cliparts", force: :cascade do |t|
    t.jsonb "image_data"
    t.string "name", default: "", null: false
    t.string "category", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "index_cliparts_on_deleted_at"
    t.index ["name"], name: "index_cliparts_on_name"
  end

  create_table "colors", force: :cascade do |t|
    t.string "value", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "index_colors_on_deleted_at"
  end

  create_table "cupcake_types", force: :cascade do |t|
    t.string "name", null: false
    t.jsonb "image_data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "index_cupcake_types_on_deleted_at"
  end

  create_table "cupcakes", force: :cascade do |t|
    t.string "kind", default: "image", null: false
    t.jsonb "image_data"
    t.bigint "clipart_id"
    t.text "message"
    t.bigint "font_id"
    t.jsonb "font_options", default: {}, null: false
    t.integer "quantity", default: 0, null: false
    t.bigint "order_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.index ["clipart_id"], name: "index_cupcakes_on_clipart_id"
    t.index ["deleted_at"], name: "index_cupcakes_on_deleted_at"
    t.index ["font_id"], name: "index_cupcakes_on_font_id"
    t.index ["order_id"], name: "index_cupcakes_on_order_id"
  end

  create_table "fonts", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.jsonb "file_data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "index_fonts_on_deleted_at"
  end

  create_table "industries", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
  end

  create_table "order_cupcake_types", force: :cascade do |t|
    t.bigint "order_id", null: false
    t.bigint "cupcake_type_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.index ["cupcake_type_id"], name: "index_order_cupcake_types_on_cupcake_type_id"
    t.index ["deleted_at"], name: "index_order_cupcake_types_on_deleted_at"
    t.index ["order_id"], name: "index_order_cupcake_types_on_order_id"
  end

  create_table "orders", force: :cascade do |t|
    t.string "full_name", null: false
    t.string "email", null: false
    t.string "phone_number", null: false
    t.string "address"
    t.string "apartment_number"
    t.date "shipping_date"
    t.string "shipping_method", null: false
    t.string "recipient_name"
    t.string "recipient_phone_number"
    t.boolean "doorman", default: false, null: false
    t.text "delivery_comment", default: "", null: false
    t.datetime "delivery_starting_at"
    t.datetime "delivery_ending_at"
    t.text "gift_message"
    t.string "count_cupcakes_by", default: "the_dozen", null: false
    t.string "order_type", default: "personal", null: false
    t.string "company"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "shareable_images", default: false, null: false
    t.text "wrap_around_label_message", default: "", null: false
    t.datetime "pickup_time"
    t.jsonb "payment_data", default: [], null: false
    t.money "units_price", scale: 2, null: false
    t.money "cupcake_designs_price", scale: 2, null: false
    t.money "gift_message_price", scale: 2, null: false
    t.money "rush_order_price", scale: 2, null: false
    t.money "shipping_price", scale: 2, null: false
    t.money "discount", scale: 2, null: false
    t.money "total", scale: 2, null: false
    t.bigint "building_type_id"
    t.datetime "deleted_at"
    t.boolean "rush_order", default: false, null: false
    t.text "additional_notes", default: "", null: false
    t.bigint "industry_id"
    t.bigint "promotion_code_id"
    t.datetime "ship_at"
    t.datetime "bake_at"
    t.index ["building_type_id"], name: "index_orders_on_building_type_id"
    t.index ["deleted_at"], name: "index_orders_on_deleted_at"
    t.index ["industry_id"], name: "index_orders_on_industry_id"
    t.index ["promotion_code_id"], name: "index_orders_on_promotion_code_id"
  end

  create_table "printed_cupcakes", force: :cascade do |t|
    t.jsonb "pdf_data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "index_printed_cupcakes_on_deleted_at"
  end

  create_table "printed_cupcakes_cupcakes", force: :cascade do |t|
    t.bigint "printed_cupcake_id", null: false
    t.bigint "cupcake_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.index ["cupcake_id"], name: "index_printed_cupcakes_cupcakes_on_cupcake_id"
    t.index ["deleted_at"], name: "index_printed_cupcakes_cupcakes_on_deleted_at"
    t.index ["printed_cupcake_id"], name: "index_printed_cupcakes_cupcakes_on_printed_cupcake_id"
  end

  create_table "promotion_codes", force: :cascade do |t|
    t.string "code", null: false
    t.datetime "expires_at"
    t.string "kind", default: "percentage", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.float "amount"
    t.index ["deleted_at"], name: "index_promotion_codes_on_deleted_at"
  end

  add_foreign_key "cupcakes", "cliparts"
  add_foreign_key "cupcakes", "fonts"
  add_foreign_key "cupcakes", "orders"
  add_foreign_key "order_cupcake_types", "cupcake_types"
  add_foreign_key "order_cupcake_types", "orders"
  add_foreign_key "orders", "building_types"
  add_foreign_key "orders", "industries"
  add_foreign_key "orders", "promotion_codes"
  add_foreign_key "printed_cupcakes_cupcakes", "cupcakes"
  add_foreign_key "printed_cupcakes_cupcakes", "printed_cupcakes"
end
