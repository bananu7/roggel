defmodule Roggel.Team do
  defstruct(id: nil, name: nil)
end

defmodule Roggel.TeamRepository do
  def new(db) do
    %{db: db}
  end

  def create(server, team_name) do
    query = """
      insert into teams
          (name)
      values
          ($1)
      returning id
    """
    case :pgsql.equery(server[:db], query, [team_name]) do
      {:ok, _count, _columns, [{team_id}]} -> {:ok, team_id}
      {:error, _error} -> {:error, :team_exists}
    end
  end
end
