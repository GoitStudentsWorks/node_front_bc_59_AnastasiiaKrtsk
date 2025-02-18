import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
  selectAvatarUrl,
  selectLoader,
  selectUserEmail,
  selectUserGender,
  selectUsername,
} from "../../../redux/selectors.js";
import {
  updateAvatarThunk,
  updateUserInfoThunk,
} from "../../../redux/thunks.js";
import {
  BtnSaveWrapper,
  BtnSettingSave,
  Error,
  Errors,
  EyeSvg,
  GenderInfoDiv,
  ImgDownloadIcon,
  ModalSettingWindow,
  NameSettingInput,
  PasswordSettingInput,
  PasswordSettingLabel,
  PhotoInputUpload,
  PhotoInputUploadLabel,
  SendSvg,
  SettingAvatarImg,
  SettingModalTitleH2,
  SettingNameEmailDiv,
  SettingNameEmailWrapper,
  SettingPhotoWrapper,
  SettingsCrossDiv,
  SettingsFormWrapper,
  SettingsPasswordSvgDiv,
  StyledCloseSvg,
  StyledSettingModalH3,
  StyledSettingsPasswordDiv,
  StyledYourGenderTitle,
  UserDataWrapper,
  YourInfoWrapp,
  YourPhotoTitleH3,
} from "./StyledSettingsUser";
import sprite from "../../../images/svg+logo/sprite.svg";
import { updateUserSchema } from "../../../helpers/validation.js";
import { setModalContent, setModalStatus } from "../../../redux/slice.js";
import { toast } from "react-toastify";
import { FragmentLoader } from "../../Loader/Loader.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants } from "../Modal.jsx";

const UserSettings = () => {
  const dispatch = useDispatch();

  const handleCloseUserSettingsModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  // ===== SELECTORS ==========

  const avatarUrl = useSelector(selectAvatarUrl);
  const userName = useSelector(selectUsername);
  const userEmail = useSelector(selectUserEmail);
  const storedUserGender = useSelector(selectUserGender);
  const isLoading = useSelector(selectLoader);

  // ===== USE STATES ==========

  const [userGender, setUserGender] = useState(storedUserGender);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (inputId) => {
    setShowPassword((prevPasswords) => ({
      ...prevPasswords,
      [inputId]: !prevPasswords[inputId],
    }));
  };

  // ======= * on Submit ==========

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(updateUserSchema),
  });

  const onSubmit = async ({
    username,
    email,
    newPassword,
    oldPassword,
    gender,
  }) => {
    await dispatch(
      updateUserInfoThunk({
        endpoint: "update",
        data: {
          username,
          email,
          newPassword,
          oldPassword,
          gender,
        },
      })
    ).unwrap();

    setUserGender(gender);

    reset();

    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  //======= Avatar File Change ======

  const handleGenderChange = (event) => {
    setUserGender(event.target.value);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile.size > 5 * 1024 * 1024) {
      toast.warning(
        "The photo must be less than 5 MB! Please choose another one"
      );
      event.target.value = "";
    } else {
      uploadAvatar(selectedFile);
    }
  };

  const uploadAvatar = (file) => {
    const formData = new FormData();
    formData.append("avatar", file);
    dispatch(updateAvatarThunk(formData));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ModalSettingWindow>
            <form onSubmit={handleSubmit(onSubmit)}>
              <SettingsCrossDiv>
                <SettingModalTitleH2>Setting</SettingModalTitleH2>
                <StyledCloseSvg onClick={handleCloseUserSettingsModal}>
                  <use href={`${sprite}#icon-outline`} />
                </StyledCloseSvg>
              </SettingsCrossDiv>
              <SettingsFormWrapper>
                <YourPhotoTitleH3>Your photo</YourPhotoTitleH3>
                <SettingPhotoWrapper>
                  {isLoading ? (
                    <FragmentLoader />
                  ) : (
                    <SettingAvatarImg
                      alt="user avatar"
                      src={avatarUrl || "V"}
                    />
                  )}

                  <PhotoInputUploadLabel
                    id="customFileUpload"
                    htmlFor="photoInput"
                  >
                    <ImgDownloadIcon>
                      <SendSvg>
                        <use href={`${sprite}#send`} />
                      </SendSvg>
                    </ImgDownloadIcon>
                    Upload a photo
                  </PhotoInputUploadLabel>

                  <PhotoInputUpload
                    type="file"
                    id="photoInput"
                    name="photo"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </SettingPhotoWrapper>

                <UserDataWrapper>
                  <YourInfoWrapp>
                    <StyledYourGenderTitle>
                      Your gender identity
                    </StyledYourGenderTitle>

                    <GenderInfoDiv>
                      <FormControl component="fieldset">
                        <FormLabel id="demo-row-radio-buttons-group-label" />
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          value={userGender}
                          onChange={handleGenderChange}
                        >
                          <FormControlLabel
                            value="woman"
                            control={
                              <Radio
                                sx={{
                                  color: "var(--dark-blue)",
                                  "& .MuiSvgIcon-root": {
                                    fontSize: "medium",
                                  },
                                }}
                              />
                            }
                            label="Woman"
                            {...register("gender")}
                          />
                          <FormControlLabel
                            value="man"
                            control={
                              <Radio
                                sx={{
                                  color: "var(--dark-blue)",
                                  "& .MuiSvgIcon-root": {
                                    fontSize: "medium",
                                  },
                                }}
                              />
                            }
                            label="Man"
                            {...register("gender")}
                          />
                        </RadioGroup>
                      </FormControl>
                    </GenderInfoDiv>

                    <SettingNameEmailWrapper>
                      <SettingNameEmailDiv>
                        <StyledSettingModalH3>Your name</StyledSettingModalH3>
                        <NameSettingInput
                          placeholder={userName}
                          type="text"
                          name="username"
                          {...register("username")}
                          errors={!!errors.username}
                        />
                        <Error>{errors.username?.message}</Error>
                      </SettingNameEmailDiv>

                      <SettingNameEmailDiv>
                        <StyledSettingModalH3>E-mail</StyledSettingModalH3>
                        <NameSettingInput
                          placeholder={userEmail}
                          type="email"
                          name="email"
                          {...register("email")}
                          errors={!!errors.email}
                        />
                        <Error>{errors.email?.message}</Error>
                      </SettingNameEmailDiv>
                    </SettingNameEmailWrapper>
                  </YourInfoWrapp>

                  <div>
                    <StyledSettingsPasswordDiv>
                      <StyledSettingModalH3>Password</StyledSettingModalH3>
                      <PasswordSettingLabel htmlFor="old-password">
                        Outdated password:
                      </PasswordSettingLabel>
                      <SettingsPasswordSvgDiv>
                        <PasswordSettingInput
                          placeholder="Password"
                          type={
                            showPassword["old-password"] ? "text" : "password"
                          }
                          name="oldPassword"
                          {...register("oldPassword")}
                          errors={!!errors.oldPassword}
                        />
                        <div
                          onClick={() =>
                            togglePasswordVisibility("old-password")
                          }
                        >
                          {showPassword["old-password"] ? (
                            <EyeSvg>
                              <use href={`${sprite}#vision`} />
                            </EyeSvg>
                          ) : (
                            <EyeSvg>
                              <use href={`${sprite}#vision-crossed`} />
                            </EyeSvg>
                          )}
                        </div>
                        <Errors>{errors.oldPassword?.message}</Errors>
                      </SettingsPasswordSvgDiv>

                      <PasswordSettingLabel htmlFor="new-password">
                        New Password:
                      </PasswordSettingLabel>
                      <SettingsPasswordSvgDiv>
                        <PasswordSettingInput
                          placeholder="Password"
                          type={
                            showPassword["new-password"] ? "text" : "password"
                          }
                          name="newPassword"
                          {...register("newPassword")}
                          errors={!!errors.newPassword}
                        />
                        <div
                          onClick={() =>
                            togglePasswordVisibility("new-password")
                          }
                        >
                          {showPassword["new-password"] ? (
                            <EyeSvg>
                              <use href={`${sprite}#vision`} />
                            </EyeSvg>
                          ) : (
                            <EyeSvg>
                              <use href={`${sprite}#vision-crossed`} />
                            </EyeSvg>
                          )}
                        </div>
                        <Errors>{errors.newPassword?.message}</Errors>
                      </SettingsPasswordSvgDiv>

                      <PasswordSettingLabel htmlFor="repeat-password">
                        Repeat new password:
                      </PasswordSettingLabel>
                      <SettingsPasswordSvgDiv>
                        <PasswordSettingInput
                          placeholder="Password"
                          type={
                            showPassword["repeat-password"]
                              ? "text"
                              : "password"
                          }
                          name="passwordRepeat"
                          {...register("passwordRepeat")}
                          errors={!!errors.passwordRepeat}
                        />
                        <div
                          onClick={() =>
                            togglePasswordVisibility("repeat-password")
                          }
                        >
                          {showPassword["repeat-password"] ? (
                            <EyeSvg>
                              <use href={`${sprite}#vision`} />
                            </EyeSvg>
                          ) : (
                            <EyeSvg>
                              <use href={`${sprite}#vision-crossed`} />
                            </EyeSvg>
                          )}
                        </div>
                        <Errors>{errors.passwordRepeat?.message}</Errors>
                      </SettingsPasswordSvgDiv>
                    </StyledSettingsPasswordDiv>
                  </div>
                </UserDataWrapper>
              </SettingsFormWrapper>
              <BtnSaveWrapper>
                <BtnSettingSave type="submit">Save</BtnSettingSave>
              </BtnSaveWrapper>
            </form>
          </ModalSettingWindow>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserSettings;
