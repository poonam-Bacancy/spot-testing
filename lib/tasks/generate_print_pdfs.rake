desc 'Generates print PDFs'
task generate_print_pdfs: :environment do
  PrintedCupcakesGenerator.call
end
