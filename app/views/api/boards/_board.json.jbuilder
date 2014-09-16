json.(board, :id, :title, :user_id, :created_at, :updated_at)

members ||= nil
unless members.nil?
  json.members(members) do |member|
    json.partial!("api/members/member", :member => member)
  end
end

lists ||= nil
unless lists.nil?
  json.lists(lists) do |list|
    json.partial!("api/lists/list", :list => list)
  end
end

cards ||= nil
unless cards.nil?
  json.cards(cards) do |cards|
    json.partial!("api/cards/cards", :cards => cards)
  end
end
