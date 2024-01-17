import { TextField } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import moment from "moment";
import { useDispatch } from "react-redux";
import sprite from "../../../images/svg+logo/sprite.svg";
import { setModalContent, setModalStatus } from "../../../redux/slice";
import {
  StyledButtonsWrapper,
  StyledCurrentValue,
  StyledEditSubTitle,
  StyledEditTitle,
  StyledForm,
  StyledIncreaseDecreaseBtn,
  StyledNewAmount,
  StyledNewAmountWrapper,
  StyledRecordingTimeWrapper,
  StyledSaveBtn,
  StyledSpan,
  StyledSvg,
  StyledTitle,
  StyledUsedWater,
  StyledWrapper,
} from "./EditWaterForm.styled";
import { toast } from "react-toastify";
import { addWaterThunk } from "../../../redux/thunks";

const SimpleForm = ({ action }) => {
  const dispatch = useDispatch();

  const handleCloseUserModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const waterVolume = formData.get("waterVolume");
    const date = moment(formData.get("date"), "h:mm a").format();

    console.log({ waterVolume, date });

    dispatch(addWaterThunk({ waterVolume, date }))
      .unwrap()
      .then(() => {
        toast.success("Water transaction added successfully");
      })
      .catch((error) => {
        toast.error("Error adding water transaction: " + error.message);
      });
  };

  return (
    <>
      <>
        <StyledForm onSubmit={handleSubmit}>
          <StyledSvg width="24" height="24" onClick={handleCloseUserModal}>
            <use href={`${sprite}#icon-outline`} />
          </StyledSvg>
          {action === "edit" ? (
            <>
              <StyledEditTitle>
                Edit the entered amount of water
              </StyledEditTitle>

              <StyledCurrentValue>
                <svg width={"36px"} height={"36px"}>
                  <use href={sprite + "#icon-water-glass"}></use>
                </svg>
                <div>250 ml</div>
                <div>Time</div>
              </StyledCurrentValue>
            </>
          ) : (
            <StyledEditTitle>Add water</StyledEditTitle>
          )}

          <StyledNewAmountWrapper>
            {action === "edit" ? (
              <StyledEditSubTitle>Correct entered data:</StyledEditSubTitle>
            ) : (
              <StyledEditSubTitle>Choose a value:</StyledEditSubTitle>
            )}
            <StyledTitle>Amount of water:</StyledTitle>
            <StyledButtonsWrapper>
              <StyledIncreaseDecreaseBtn>
                <svg width={"36px"} height={"36px"}>
                  <use href={sprite + "#icon-minus"}></use>
                </svg>
              </StyledIncreaseDecreaseBtn>
              <StyledNewAmount>250ml</StyledNewAmount>
              <StyledIncreaseDecreaseBtn>
                <svg width={"36px"} height={"36px"}>
                  <use href={sprite + "#icon-plus"}></use>
                </svg>
              </StyledIncreaseDecreaseBtn>
            </StyledButtonsWrapper>
          </StyledNewAmountWrapper>

          <StyledRecordingTimeWrapper>
            <StyledTitle>Recording time:</StyledTitle>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["MobileTimePicker"]}>
                <DemoItem>
                  <TimePicker
                    sx={{
                      width: "544px",
                      "& .MuiInputBase-input:hover": { borderColor: "red" },
                      "& .MuiTextField-root": {
                        "&:hover": {
                          borderColor: "var(--dark-blue)",
                        },
                      },
                      "& .MuiSvgIcon-root": { fill: "var(--dark-blue)" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        "&:hover": {
                          borderColor: "var(--dark-blue)",
                        },
                      },
                      "& .MuiInputBase-root": {
                        borderRadius: "6px",
                        color: "var(--dark-blue)",
                      },
                      // ----------------
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--light-blue-3)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--dark-blue)",
                        },
                        "&.Mui-focused fieldset": {
                          borderRadius: "6px",
                          border: "1.5px solid var(--dark-blue)",
                          color: "var(--dark-blue)",
                        },
                      },
                    }}
                    name="date"
                    views={["hours", "minutes"]}
                    format="hh:mm a"
                    timeSteps={{ minutes: 1 }}
                    ampm={true}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </StyledRecordingTimeWrapper>

          <StyledUsedWater>
            <StyledEditSubTitle>
              Enter the value of the water used:
            </StyledEditSubTitle>
            <TextField
              sx={{
                width: "544px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "var(--light-blue-3)",
                  },
                  "&:hover fieldset": {
                    borderColor: "var(--dark-blue)",
                  },
                  "&.Mui-focused fieldset": {
                    borderRadius: "6px",
                    border: "1.5px solid var(--dark-blue)",
                    color: "var(--dark-blue)",
                  },
                },
                "& .MuiInputBase-root": {
                  borderRadius: "6px",
                  color: "var(--dark-blue)",
                },
              }}
              name="waterVolume"
              type="number"
              inputProps={{
                min: 1,
                max: 15000,
              }}
            />
          </StyledUsedWater>
          {/* TODO додати WaterAmount*/}
          <StyledWrapper>
            <StyledSpan>20ml</StyledSpan>
            <StyledSaveBtn type="submit" color="primary">
              Save
            </StyledSaveBtn>
          </StyledWrapper>
        </StyledForm>
      </>
    </>
  );
};

export default SimpleForm;
