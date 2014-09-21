class StaticPagesController < ApplicationController
  before_action :require_signed_in, only: [:root]
  before_action :require_signed_out, only: [:landing]
  
  def root
  end
  
  def landing
  end
end
