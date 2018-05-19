defmodule ReactQuicklyWeb.PageController do
  use ReactQuicklyWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
