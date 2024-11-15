import React, { useState } from "react";

import { TouchableOpacity, Image, TextInput, Alert } from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format, isPast } from "date-fns";
import styles from "./style";

import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

export default function DateTimeInputAndroid({ type, save, dates, hour }) {
  const [dateTime, setDateTime] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  if (type === "date" && dates && dateTime === "") {
    setDateTime(format(new Date(dates), "dd/MM/yyyy"));
    save(format(new Date(`${dates}`), "yyy-MM-dd"));

  }

  if (type === "hour" && hour && dateTime === "") {
    setDateTime(format(new Date(hour), "HH:mm"));
    save(format(new Date(`${hour}`), "HH:mm"));
  }

  function showDatePicker() {
    setDatePickerVisibility(true);
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if ({ date } == "") {
      hideDatePicker();
    } else
      if (isPast(new Date(date), "dd/MM/yyyy")) {
        Alert.alert("Escolha uma data atual");
        hideDatePicker();

      } else {
        setDateTime(format(new Date(date), "dd/MM/yyyy"));
        save(format(new Date(`${date}`), "yyy-MM-dd"));
        hideDatePicker();
      }


  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (date) => {
    if ({ date } == "") {
      hideTimePicker();
    } else {
      setDateTime(format(new Date(date), "HH:mm"));
      save(format(new Date(`${date}`), "HH:mm"));
      hideTimePicker();
    }
  };

  async function selectDateOrHour() {
    if (type == "date") {
      {
        showDatePicker();
      }
    } else if (type == "hour") {
      {
        showTimePicker();
      }
    }
  }

  return (
    <TouchableOpacity onPress={selectDateOrHour}>
      <TextInput
        style={styles.textInput}
        placeholder={
          type == "date"
            ? "Clique aqui para definir a data..."
            : "Clique aqui para definir a hora..."
        }
        editable={false}
        value={dateTime}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        is24Hour
        locale="pt_br"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
      <Image
        style={styles.iconTextInput}
        source={type == "date" ? iconCalendar : iconClock}
      />
    </TouchableOpacity>
  );
}
