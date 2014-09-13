defmodule Roggel.TeamTest do
  use ExUnit.Case
end

defmodule Roggel.TeamServerTest do
  use ExUnit.Case

  setup do
    {:ok, db} = :pgsql.connect('localhost', '__init__', database: 'roggel')
    :pgsql.equery(db, "delete from teams")
    {:ok, db: db}
  end

  test "create new team", ctx do
    server = Roggel.TeamServer.new(ctx[:db])
    {:ok, _id} = Roggel.TeamServer.create(server, "hello")
  end
end
