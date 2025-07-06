import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setSelectedHobbies((prev) =>
      checked ? [...prev, value] : prev.filter((hobby) => hobby !== value)
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setProfilePicture(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    if (fullName.trim().length < 3) {
      newErrors.fullName = "Full Name must be at least 3 characters.";
      isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    if (
      password.length < 8 ||
      !/[a-zA-Z]/.test(password) ||
      !/\d/.test(password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters and contain letters and numbers.";
      isValid = false;
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    if (!/^\d{10,}$/.test(phone)) {
      newErrors.phone = "Phone number must be at least 10 digits.";
      isValid = false;
    }

    if (!gender) {
      newErrors.gender = "Please select a gender.";
      isValid = false;
    }

    if (!dateOfBirth) {
      newErrors.dateOfBirth = "Please enter your date of birth.";
      isValid = false;
    } else {
      const birthDate = new Date(dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const hasHadBirthday =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
          today.getDate() >= birthDate.getDate());
      const actualAge = hasHadBirthday ? age : age - 1;
      if (actualAge < 18) {
        newErrors.dateOfBirth = "You must be at least 18 years old.";
        isValid = false;
      }
    }

    if (!country) {
      newErrors.country = "Please select a country.";
      isValid = false;
    }

    if (selectedHobbies.length === 0) {
      newErrors.hobbies = "Please select at least one hobby.";
      isValid = false;
    }

    if (profilePicture) {
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validTypes.includes(profilePicture.type)) {
        newErrors.profilePicture =
          "Only .jpg, .jpeg, or .png image files are allowed.";
        isValid = false;
      }
    }

    if (bio.length > 300) {
      newErrors.bio = "Bio must be 300 characters or less.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className={styles.registrationForm}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            id="username"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}
        </div>

        <div className={styles.formGroupSelect}>
          <label>Gender</label>
          <p>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Male
          </p>
          <p>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Female
          </p>
          <p>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Other
          </p>
          {errors.gender && <p className={styles.error}>{errors.gender}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="date">Date of Birth</label>
          <input
            type="date"
            id="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          {errors.dateOfBirth && (
            <p className={styles.error}>{errors.dateOfBirth}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="country">Country</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="" disabled>
              Select country
            </option>
            <option value="vn">Việt Nam</option>
            <option value="us">Hoa Kỳ</option>
            <option value="jp">Nhật Bản</option>
            <option value="kr">Hàn Quốc</option>
          </select>
          {errors.country && <p className={styles.error}>{errors.country}</p>}
        </div>

        <div className={styles.formGroupSelect}>
          <label>Hobbies</label>
          <p>
            <input
              type="checkbox"
              name="hobby"
              value="reading"
              checked={selectedHobbies.includes("reading")}
              onChange={handleHobbyChange}
            />{" "}
            Reading
          </p>
          <p>
            <input
              type="checkbox"
              name="hobby"
              value="traveling"
              checked={selectedHobbies.includes("traveling")}
              onChange={handleHobbyChange}
            />{" "}
            Traveling
          </p>
          <p>
            <input
              type="checkbox"
              name="hobby"
              value="gaming"
              checked={selectedHobbies.includes("gaming")}
              onChange={handleHobbyChange}
            />{" "}
            Gaming
          </p>
          {errors.hobbies && <p className={styles.error}>{errors.hobbies}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="profile-picture">Profile Picture</label>
          <input
            type="file"
            id="profile-picture"
            accept="image/*"
            onChange={handleFileChange}
          />
          {errors.profilePicture && (
            <p className={styles.error}>{errors.profilePicture}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={300}
          ></textarea>
          <small>{300 - bio.length} characters remaining</small>
          {errors.bio && <p className={styles.error}>{errors.bio}</p>}
        </div>

        <button className={styles.registerButton} type="submit">
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
