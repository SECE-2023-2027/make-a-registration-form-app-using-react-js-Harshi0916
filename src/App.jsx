import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const sectionsData = [
  {
    id: "home",
    backgroundImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
    title: "Build social profiles and gain revenue profits",
    description: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore justo in minima facere dolorem!",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore justo in minima facere dolorem!",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore justo in minima facere dolorem!",
    ],
  },
  {
    id: "explore",
    backgroundColor: "#222",
    title: "Explore & Connect",
    description: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid tempore perspiciatis repudiandae hic?",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid tempore perspiciatis repudiandae hic?",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid tempore perspiciatis repudiandae hic?",
    ],
    imgSrc:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "create",
    backgroundColor: "#0d6efd",
    title: "create",
    description: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente doloribus ut iure itaque quibusdam rem accusantium deserunt reprehenderit sunt minus.",
    ],
    leftTextTitle: "create your passion",
    leftTextDesc: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid tempore perspiciatis repudiandae hic?",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid tempore perspiciatis repudiandae hic?",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid tempore perspiciatis repudiandae hic?",
    ],
    rightImgSrc:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "share",
    backgroundColor: "#f8f9fa",
    title: "share what you create",
    description: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid tempore perspiciatis repudiandae hic?",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid tempore perspiciatis repudiandae hic?",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid tempore perspiciatis repudiandae hic?",
    ],
    imgSrc:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60",
  },
];

const Section = React.forwardRef(
  (
    {
      data,
      formData,
      setFormData,
      onFormSubmit,
      leftContent,
    },
    ref
  ) => {
    if (data.id === "home") {
      return (
        <section
          ref={ref}
          id={data.id}
          className="section home-section"
          style={{ backgroundImage: `url(${data.backgroundImage})` }}
        >
          <div className="home-left">
            <h1 className="home-title">
              {leftContent.title ? (
                leftContent.title
              ) : (
                <>
                  Build <b>social profiles</b> and gain revenue <b>profits</b>
                </>
              )}
            </h1>
            {(leftContent.paragraphs.length > 0
              ? leftContent.paragraphs
              : data.description
            ).map((para, i) => (
              <p key={i} className="home-desc">
                {para}
              </p>
            ))}
          </div>
          <div className="home-right">
            <h3>Sign Up Today</h3>
            <p className="home-right-subtext">
              Please fill out this form to register
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onFormSubmit();
              }}
              className="signup-form"
            >
              <input
                type="text"
                placeholder="username"
                value={formData.username}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, username: e.target.value }))
                }
                required
                className="form-input"
              />
              <input
                type="email"
                placeholder="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, email: e.target.value }))
                }
                required
                className="form-input"
              />
              <input
                type="password"
                placeholder="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, password: e.target.value }))
                }
                required
                className="form-input"
              />
              <input
                type="password"
                placeholder="confirm password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData((f) => ({
                    ...f,
                    confirmPassword: e.target.value,
                  }))
                }
                required
                className="form-input"
              />
              <button type="submit" className="submit-btn">
                submit
              </button>
            </form>
          </div>
        </section>
      );
    }

    if (data.id === "explore" || data.id === "share") {
      return (
        <section
          ref={ref}
          id={data.id}
          className={`section ${data.id}-section`}
          style={{
            backgroundColor: data.backgroundColor,
            color: data.id === "share" ? "#333" : "white",
          }}
        >
          <img src={data.imgSrc} alt={data.title} className="circle-img" />
          <div className="text-content">
            <h2>{data.title}</h2>
            {data.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <button
              className="findout-btn"
              onClick={() => alert(`Clicked findout on ${data.id}`)}
            >
              findout
            </button>
          </div>
        </section>
      );
    }

    if (data.id === "create") {
      return (
        <section
          ref={ref}
          id={data.id}
          className="section create-section"
          style={{ backgroundColor: data.backgroundColor }}
        >
          <div className="create-left">
            <h1 className="create-title">{data.title}</h1>
            <p className="create-desc">{data.description[0]}</p>
            <button
              className="findout-btn white-btn"
              onClick={() => alert("Clicked findout on create")}
            >
              findout
            </button>
            <div>
              <h3>{data.leftTextTitle}</h3>
              {data.leftTextDesc.map((para, i) => (
                <p key={i} className="create-left-desc">
                  {para}
                </p>
              ))}
            </div>
          </div>
          <img src={data.rightImgSrc} alt="Create" className="circle-img" />
        </section>
      );
    }

    return null;
  }
);

export default function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [leftContent, setLeftContent] = useState({
    title: "",
    paragraphs: [],
  });

  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onFormSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLeftContent({
      title: `Hello, ${formData.username}!`,
      paragraphs: [
        `Your email: ${formData.email}`,
        "Your password is securely stored.",
        "Thanks for signing up!",
      ],
    });

    alert("Form submitted! Left content updated.");
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        {sectionsData.map((section, i) => (
          <button
            key={section.id}
            onClick={() =>
              window.scrollTo({
                top: i * window.innerHeight,
                behavior: "smooth",
              })
            }
            className="nav-btn"
          >
            {section.id}
          </button>
        ))}
      </nav>

      {sectionsData.map((section, i) => (
        <Section
          key={section.id}
          data={section}
          ref={(el) => (sectionRefs.current[i] = el)}
          formData={formData}
          setFormData={setFormData}
          onFormSubmit={onFormSubmit}
          leftContent={leftContent}
        />
      ))}
    </div>
  );
}
