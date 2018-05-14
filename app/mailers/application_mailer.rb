class ApplicationMailer < ActionMailer::Base
  default from: 'noreply@spotsnyc.com'
  layout 'mailer'
  helper ApplicationHelper
end
