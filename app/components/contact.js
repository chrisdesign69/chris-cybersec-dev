"use client";

import React from "react";

import { useForm } from "react-hook-form";

//Styles
import styles from "/app/styles/min/Form.module.css";

const name_pattern = /^[A-z -]+$/i;
const email_pattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;

const QwikContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = async (data) => {
    //    console.log(data);
    const output = JSON.stringify(data);
    console.log(output);

    //nodemailer
    const config = {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: output
    };

    if (process.env.NODE_ENV === "development") {
      fetch("/api/contact", config).then((res) => {
        console.log("..........response received");
        if (res.status === 200) {
          console.log("Message successfully sent ........ ✨✨✨✅");
        }
      });
    } else {
      fetch("https://chris-cybersec.dev/api/contact", config).then((res) => {
        console.log("..........response received");
        if (res.status === 200) {
          console.log("Message successfully sent ........ ✨✨✨✅");
        }
      });
    }

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3>Quick Contact</h3>

      <div className={styles.formInputContainer}>
        <div className={styles.input}>
          {(errors.name?.type === "required" && (
            <p className={styles.errorName}>Name is required</p>
          )) ||
            (errors.name?.type === "pattern" && (
              <p className={styles.errorName}>Name is invalid</p>
            ))}
          <input
            type="text"
            id="name"
            autoComplete="off"
            {...register("name", { required: true, pattern: name_pattern })}
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className={styles.input}>
          {(errors.email?.type === "required" && (
            <p className={styles.errorEmail}>Email is required</p>
          )) ||
            (errors.email?.type === "pattern" && (
              <p className={styles.errorEmail}>Email is invalid</p>
            ))}
          <input
            type="text"
            id="email"
            autoComplete="off"
            {...register("email", { required: true, pattern: email_pattern })}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className={styles.submit}>
          <div className={styles.item} onClick={handleSubmit(onSubmit)}>
            Submit
          </div>
        </div>
      </div>
    </form>
  );
};

export default QwikContact;
