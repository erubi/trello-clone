# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  gravatar_url    :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  validates :email, :session_token, presence: true
  validates :password, length: { minimum: 5, allow_nil: true }
  validates :email, uniqueness: true

  has_many :boards
  has_many :card_assignments
  has_many :board_memberships

  attr_reader :password
  after_initialize :ensure_session_token
  after_create :guest_setup
  
  def guest_setup
    return unless self.guest
    u1 = self

    b1 = u1.boards.create(title: 'Apartment')
    b2 = u1.boards.create(title: 'Work')

    l1 = b1.lists.create(title: 'todo', ord: 0)
    l2 = b1.lists.create(title: 'doing', ord: 1)
    l3 = b1.lists.create(title: 'done', ord: 2)

    c1 = l3.cards.create(title: 'clean', description: 'clean all the things')
    c2 = l2.cards.create(title: 'organize', description: 'organize all the things')
    c3 = l1.cards.create(title: 'decorate', description: 'decorate all the things')

    c4 = l1.cards.create(title: 'buy furniture', description: 'get a table')


    l1 = b2.lists.create(title: 'todo', ord: 0)
    l2 = b2.lists.create(title: 'doing', ord: 1)
    l3 = b2.lists.create(title: 'done', ord: 2)

    c1 = l3.cards.create(title: 'plan new project')
    c2 = l2.cards.create(title: 'update rails gems', description: 'shoulda matchers!')
    c3 = l1.cards.create(title: 'start new project')
    
    # i1 = c1.items.create(done: false, title: 'mocha')
    # i2 = c1.items.create(done: true, title: 'mocha')
    # i3 = c1.items.create(done: true, title: 'cookie')
    
  end
  
  def self.new_guest
    u = User.create(:email => "guest_#{Time.now.to_i}#{rand(99)}@example.com", guest: true, password_digest: "")
    u.save(validate: false)
    u
  end

  def gravatar_url
    "http://www.gravatar.com/avatar/#{ Digest::MD5.hexdigest(email) }"
  end

  def self.find_by_credentials(user_params)
    user = User.find_by_email(user_params[:email])
    user.try(:is_password?, user_params[:password]) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  protected

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
