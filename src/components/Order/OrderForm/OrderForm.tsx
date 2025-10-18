"use client";
import Typography from "@/ui/Typography/Typography";
import styles from "./OrderForm.module.css";
import { useState, useRef } from "react";
import { IconPaperclip } from "@tabler/icons-react";
import cn from "classnames";

export default function OrderForm({ design }: { design?: "A" | "B" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    requests: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Введите имя";
    if (!formData.phone.trim()) newErrors.phone = "Введите телефон";
    else if (!/^\+?\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Некорректный номер";
    if (!formData.date) newErrors.date = "Выберите дату";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // e.preventDefault();
    // if (!validateForm()) return;
    // const data = new FormData();
    // data.append("name", formData.name);
    // data.append("phone", formData.phone);
    // data.append("date", formData.date);
    // data.append("requests", formData.requests);
    // files.forEach((file, index) => {
    //   data.append(`file_${index}`, file);
    // });
    // try {
    //   const res = await fetch("/api/order", {
    //     method: "POST",
    //     body: data,
    //   });
    //   console.log("✅ Отправлено:", await res.json());
    // } catch (err) {
    //   console.error("❌ Ошибка при отправке:", err);
    // }
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit} noValidate>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        type="text"
        placeholder="Имя"
        className={cn(styles.input, {
          [styles.inputError]: errors.name,
          [styles.input_b]: design === "B",
        })}
      />
      {errors.name && <p className={styles.error_text}>{errors.name}</p>}

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        type="tel"
        placeholder="Телефон"
        className={cn(styles.input, {
          [styles.inputError]: errors.phone,
          [styles.input_b]: design === "B",
        })}
      />
      {errors.phone && <p className={styles.error_text}>{errors.phone}</p>}

      <input
        name="date"
        value={formData.date}
        onChange={handleChange}
        type="date"
        className={cn(styles.input, styles.date, {
          [styles.inputError]: errors.date,
          [styles.input_b]: design === "B",
        })}
      />
      {errors.date && <p className={styles.error_text}>{errors.date}</p>}

      <div className={styles.textarea_container}>
        <textarea
          name="requests"
          value={formData.requests}
          onChange={handleChange}
          placeholder="Пожелания"
          className={cn(styles.input, styles.textarea, {
            [styles.input_b]: design === "B",
          })}
        />
        <IconPaperclip
          size={24}
          className={styles.paperclip}
          onClick={handleIconClick}
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className={styles.fileInput}
          onChange={handleFileChange}
        />
      </div>

      {files.length > 0 && (
        <div className={styles.preview_container}>
          {files.map((file, i) => (
            <img
              key={i}
              src={URL.createObjectURL(file)}
              alt={`preview-${i}`}
              className={styles.preview_image}
            />
          ))}
        </div>
      )}

      <button
        type="submit"
        className={cn(styles.order_btn, {
          [styles.order_btn_b]: design === "B",
        })}
      >
        <Typography as="p" variant="h1" className={styles.order_btn_text}>
          Заказать
        </Typography>
      </button>

      <Typography variant="p2" className={styles.privacy}>
        Нажимая кнопку “Заказать”, вы соглашаетесь с политикой
        конфиденциальности и обработки личных данных.
      </Typography>
    </form>
  );
}
