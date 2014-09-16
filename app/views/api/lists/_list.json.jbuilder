json.(list, :id, :title, :board_id, :ord, :created_at, :updated_at)

cards = list.cards
unless cards.nil?
  json.cards(cards) do |card|
    json.partial!("api/cards/card", :card => card)
  end
end
