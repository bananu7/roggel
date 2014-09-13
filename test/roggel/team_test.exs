defmodule Roggel.TeamTest do
  use ExUnit.Case
end

defmodule Roggel.TeamRepositoryTest do
  use ExUnit.Case

  setup do
    {:ok, db} = :pgsql.connect('localhost', '__init__', database: 'roggel')
    :pgsql.equery(db, "delete from teams")
    {:ok, db: db}
  end

  test "create new team", ctx do
    server = Roggel.TeamRepository.new(ctx[:db])
    {:ok, _id} = Roggel.TeamRepository.create(server, "hello")
  end
end
