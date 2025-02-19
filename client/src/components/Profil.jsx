import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineGridOn } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { RiShieldUserFill } from "react-icons/ri";
import { MdOutlinePhotoCamera } from "react-icons/md";

const Profil = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const [note, setNote] = useState(""); // Zametkani saqlash uchun holat
  const [savedNote, setSavedNote] = useState(""); // Saqlangan zametka

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const saveNote = () => {
    setSavedNote(note); // Zametkani saqlash
    setNote(""); // Inputni tozalash
  };
  return (
    <>
      <div className="profil">
        <div className="profil_main">
          <div className="profil_name_img">
            <div className="user_img">
              <div className="profile_placeholder">
                <CgProfile className="profile_icon" />
              </div>
              {/* <div className="note_section">
                {!savedNote ? (
                  <div className="note_input_wrapper">
                    <input
                      type="text"
                      value={note}
                      onChange={handleNoteChange}
                      placeholder="Write a note..."
                      className="note_input"
                    />
                    <button onClick={saveNote} className="note_btn">
                      Save Note
                    </button>
                  </div>
                ) : (
                  <p className="saved_note">{savedNote}</p>
                )}
              </div> */}
            </div>
            <div className="user_name_foolow">
              <div className="name_foolow_btn">
                <h2 className="user_name_h2">Alisher_2009</h2>
                <button className="edit_profile_btn">Edit profile</button>
                <button className="edit_viewarchive_btn">Viev Archie</button>
                <p className="settings_profil_p">
                  <IoIosSettings />
                </p>
              </div>
              <div className="user_foolowers_number">
                <p className="user_foolowers_number_p">0 publications</p>
                <p className="user_foolowers_number_p">0 subscribers</p>
                <p className="user_foolowers_number_p">0 subscriptions</p>
              </div>
            </div>
          </div>
          {/* add storie */}
          <div className="add_storie">
            <div className="add_storie_plas">+</div>
            <h3 className="add_storie_h3">Add</h3>
          </div>
          <div className="profil_line">
            <hr className="profil_hr" />
            <div className="profil_hr_bottom_link">
              <h3
                className="profil_past_h3"
                onClick={() => handleCategoryClick(1)}
              >
                <MdOutlineGridOn />
                Publications
              </h3>
              <h3
                className="profil_past_h3"
                onClick={() => handleCategoryClick(2)}
              >
                <IoBookmarkSharp />
                Saved
              </h3>
              <h3
                className="profil_past_h3"
                onClick={() => handleCategoryClick(3)}
              >
                <RiShieldUserFill />
                Marks
              </h3>
            </div>
          </div>
          <div className="profil_pablications">
            <div className="pablications_text">
              <h3>First steps</h3>
            </div>
            {selectedCategory === 1 && (
              <div className="div_pablications_items">
                <div className="pablications_item">
                  <p className="pablications_item_svg">
                    <MdOutlinePhotoCamera />
                  </p>
                  <h2 className="pablications_item_h2">Share photo</h2>
                  <p className="pablications_item_p">
                    Photos you share will appear on your profile
                  </p>
                  <button className="pablications_item_btn">
                    Share your first photo
                  </button>
                </div>
                <div className="pablications_item">
                  <p className="pablications_item_svg">
                    <MdOutlinePhotoCamera />
                  </p>
                  <h2 className="pablications_item_h2">Add phone number</h2>
                  <p className="pablications_item_p">
                    Add your phone number so you can and more.
                  </p>
                  <button className="pablications_item_btn">
                    Add phone number
                  </button>
                </div>
                <div className="pablications_item">
                  <p className="pablications_item_svg">
                    <MdOutlinePhotoCamera />
                  </p>
                  <h2 className="pablications_item_h2">
                    Fill out your profile
                  </h2>
                  <p className="pablications_item_p">
                    Enter your name and add a bio so your friends can find you.
                  </p>
                  <button className="pablications_item_btn">
                    Edit profile
                  </button>
                </div>
                <div className="pablications_item">
                  <p className="pablications_item_svg">
                    <MdOutlinePhotoCamera />
                  </p>
                  <h2 className="pablications_item_h2">Add a profile photo</h2>
                  <p className="pablications_item_p">
                    Add a profile photo so your friends can recognize you.
                  </p>
                  <button className="pablications_item_btn">
                    Add profile photo
                  </button>
                </div>
              </div>
            )}
            {selectedCategory === 2 && (
              <div className="save">
                <div className="save_top">
                  <p className="save_top_p">
                    The list of saved items is visible only to you.
                  </p>
                  <p className="save_top_p_link">+ New selection</p>
                </div>
                <div className="marks">
                  <p className="marks_p_icon">
                    <IoBookmarkSharp />
                  </p>
                  <h1 className="marks_h1">Save</h1>
                  <p className="marks_p1">
                    Save photos and videos you want to watch again. No one will
                    be notified, and only you can see the saved items.
                  </p>
                </div>
              </div>
            )}
            {selectedCategory === 3 && (
              <div className="marks">
                <p className="marks_p_icon">
                  <RiShieldUserFill />
                </p>
                <h1 className="marks_h1">Photo with you</h1>
                <p className="marks_p">
                  This shows people who have tagged you in their photos.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="login_bottom_link_bottom">
          <div className="link">
            <a href="">Meta</a>
            <a href="">Information</a>
            <a href="">Blog</a>
            <a href="">Vacancies</a>
            <a href="">Help</a>
            <a href="">API</a>
            <a href="">Confidentiality</a>
            <a href="">Terms and Conditions</a>
            <a href="">Places</a>
            <a href="">Instagram Lite</a>
            <a href="">Threads</a>
            <a href="">Uploading Contacts and Non-Users</a>
            <a href="">Meta Verified</a>
          </div>
          <div className="year_versia">
            <h3 className="year_versia_h3">© 2025 Instagram from Meta</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
