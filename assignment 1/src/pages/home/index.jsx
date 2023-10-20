import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { MdOutlineClear } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { useLogin } from "../../hooks";

import styles from "./style.module.css"; // Import css modules stylesheet as styles

export default function Home() {
  const [username, setUsername] = useState("");
  const { user, onSubmit, isLoading } = useLogin();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_me}>
          <BsGithub size={24} />
          <h3>{user?.login || "Github"}</h3>
        </div>

        <div className={styles.header_me}>
          {user && <h3>{user.name}</h3>}

          {user && (
            <LazyLoadImage
              effect="blur"
              alt="user avatar"
              src={user.avatar_url}
            />
          )}

          {!user ? (
            <button onClick={() => onSubmit()}>
              {!username && isLoading && (
                <CgSpinner size={18} className="icon-spinner" />
              )}

              {!username && isLoading ? "Logging in..." : "Continue as me"}
            </button>
          ) : null}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.input}>
          {username ? (
            <button className={styles.clear} onClick={() => setUsername("")}>
              <MdOutlineClear />
            </button>
          ) : (
            <CiSearch />
          )}
          <input
            type="text"
            value={username}
            placeholder="Search GitHub username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            disabled={!username}
            className={styles.submit}
            onClick={() => onSubmit(username)}
          >
            {username && isLoading && (
              <CgSpinner size={24} className="icon-spinner" />
            )}
            {username && isLoading ? "search..." : "search"}
          </button>
        </div>
      </div>
    </div>
  );
}
