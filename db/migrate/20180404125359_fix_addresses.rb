class FixAddresses < ActiveRecord::Migration[5.1]
  def up
    execute('SELECT orders.id, orders.address FROM orders').each do |order|
      address = convert_address(order['address'])
      id = order['id']
      execute("UPDATE orders SET address = '#{address}' WHERE id = #{id}")
    end
  end

  def down
  end

  private

  def convert_address(malformed_address)
    return unless malformed_address
    address_parts =
      malformed_address
      .scan(/\{(.*)\}/)
      .flatten
      .first[0..-2]
      .split(/", /)
      .map { |s| s.split('=>') }
      .map { |p| [p.first.scan(/"(.*)"/).flatten.first, p.last.scan(/"(.*)/).flatten.first] }

    address_parts = Hash[address_parts]

    %w(country state zipcode city street)
      .map { |k| address_parts[k] }
      .compact
      .join(', ')
  end
end
