class AlarmClock

  def initialize
    @alarms = []
  end

  def set_alarm time
    @alarms.push time.strftime("%m/%d/%y %H:%M")
  end

  def start
    loop do
      puts "inside loop"
      current_time = Time.now.strftime("%m/%d/%y %H:%M")
      if @alarms.include? current_time
        puts "ring!!!"
        @alarms.delete current_time
      end
      sleep 60
    end
  end
  
end