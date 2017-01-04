class Api::V1::MeetingsController < ApplicationController
  def index
    @meetings = Meeting.all
    render 'index.json.jbuilder'
  end

  def create
    @meeting = Meeting.create(
      name: params[:name],
      end_time: params[:endTime],
      start_time: params[:startTime],
      notes: params[:theNotes],
      address: params[:address]
    )
    render 'show.json.jbuilder'
  end
end
