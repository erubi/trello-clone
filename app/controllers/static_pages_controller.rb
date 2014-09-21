class StaticPagesController < ApplicationController
  before_action :require_signed_in!, only: [:root]
  before_action :require_signed_out!, only: [:home]
  
  def root
  end
  
  def home
  end
end
