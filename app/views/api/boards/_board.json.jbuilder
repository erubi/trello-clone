json.(board, :id, :title, :user_id, :created_at, :updated_at)

lists ||= nil
unless lists.nil?
  json.lists(lists) do |list|
    json.partial!("api/lists/list", :list => list)
  end
end