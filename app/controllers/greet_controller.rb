class GreetController < ApplicationController
  def index
    random_num = rand(1..5)
    @greet = Greeting.select(:name).where(id: random_num)
    render json: @greet
  end
end
