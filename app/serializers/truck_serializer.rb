class TruckSerializer
  include FastJsonapi::ObjectSerializer
  attributes :license, :lat, :long

  
end
