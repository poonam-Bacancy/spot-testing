desc 'Import clipart from the clipart directory'
task import_clipart: :environment do
  path = Rails.root.join('clipart')
  return (puts 'Clipart directory not found') unless Dir.exists?(path)

  Dir.foreach(path) do |directory|
    next if directory =~ /^\..*$/
    dirpath = path.join(directory)
    next unless Dir.exists?(dirpath)

    puts "Category: #{directory}"

    Dir.foreach(dirpath) do |image|
      next if image =~ /^\..*$/
      next unless image =~ /^.+\.png$/
      imgpath = dirpath.join(image)
      next unless File.exists?(imgpath)

      puts "  - #{image}"

      name = File.basename(image).strip
      category = directory.strip

      clipart =
        Clipart.find_by(name: name, category: category) ||
        Clipart.new(name: name, category: category)

      clipart.image = File.open(imgpath, 'r')
      clipart.save
    end
  end
end
