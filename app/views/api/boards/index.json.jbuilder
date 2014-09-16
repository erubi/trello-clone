json.array!(@boards) do |board|
  json.partial!("board", :board => board,
   :members => board.members,
   :lists => board.lists,
   :cards => board.cards)
end