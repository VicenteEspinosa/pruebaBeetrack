module Api
    module V1
        class TrucksController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                trucks = Truck.all

                render json: TruckSerializer.new(trucks).serialized_json
            end

            def show
                truck = Truck.find_by(license: params[:license])

                render json: TruckSerializer.new(truck).serialized_json
            end

            def create
                truck = Truck.find_by(license: params[:license])

                if truck != nil
                    if truck.update(truck_params)
                        render json: TruckSerializer.new(truck).serialized_json
                    else
                        render json: {error: truck.errors.messages}, status: 422
                    end
                    
                else
                    truck = Truck.new(truck_params)

                    if truck.save
                        render json: TruckSerializer.new(truck).serialized_json
                    else
                        render json: {error: truck.errors.messages}, status: 422
                    end
                end
            end

            def update
                truck = Truck.find_by(license: params[:license])

                if truck.update(truck_params)
                    render json: TruckSerializer.new(truck).serialized_json
                else
                    render json: {error: truck.errors.messages}, status: 422
                end
            end

            def destroy
                truck = Truck.find_by(license: params[:license])

                if truck.detroy
                    head :no_content
                else
                    render json: {error: truck.errors.messages}, status: 422
                end
            end

            private

            def truck_params
                params.require(:truck).permit(:license, :lat, :long)
            end
        end
    end
end