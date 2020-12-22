/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SIcon from "../shared/SIcon";
import { general, contacts } from "../../data/index.json";
import { HtmlEditor, MenuBar } from "@aeaton/react-prosemirror";
import { options, menu } from "@aeaton/react-prosemirror-config-default";
import sendMail from "../../actions/sendEmail";

import dotenv from "dotenv";
dotenv.config();

export default function Contact(props) {

  const [editor_value, setEditValue] = React.useState('')
  const [email_value, setEmail] = React.useState('')
  const [responce, setResponce] = React.useState(null)
  const [save_caption_value, changeSaveCaption] = React.useState('Send')

  const onchange = (e) => {
    setEditValue(e)
  }

  const CustomEditor = ({ value, onChange: handleChange }) => (
    <HtmlEditor
      options={options}
      value={value}
      onChange={handleChange}
      render={({ editor, view }) => (
        <div>
          <MenuBar menu={menu} view={view} />
          {editor}
        </div>
      )}
    />
  );

  const handleSendEmail = () => {
    changeSaveCaption('Sending...');
    sendMail(email_value, editor_value).then((res) => {
      if(res.responce === 'success') {
        setResponce({
          style: 'success',
          message: 'Your message is received, I will reply directly to your email within 3 to 8 hours.'
        })
        setEditValue('');
        setEmail('');
        changeSaveCaption("Send");
      } else {
        setResponce({
          style: "error",
          message:
            "Something went wrong! Please try again later!!!",
        });
        changeSaveCaption("Send");
      }
    });
  }

  return (
    <div id="animatedModal" className="popup-modal p-4">
      <div className="container">
        <div
          id="btn-close-modal"
          className="close-animatedModal close-popup-modal"
        >
          <i className="ti-close"></i>
        </div>
        <div className="clearfix"></div>
        <div className="modal-content">
          <div className="container">
            <div className="portfolio-padding d-flex justify-content-center align-items-center">
              <div className="col-md-8 col-md-offset-2">
                <div class="info-side">
                  <div className="info-side-inner d-flex align-items-center">
                    <div className="logo">
                      <a
                        onClick={(e) => {
                          props.goto(e, "Home");
                        }}
                      >
                        <span className="d-flex align-items-center">
                          <i>R</i>
                        </span>
                      </a>
                    </div>
                    <SIcon icon="ti-angle-right" styleClass="icon7" />
                    <div className="social-m d-flex ml-3">
                      {general.social_links.map((item, i) => (
                        <SIcon
                          key={`key_${i}`}
                          icon={item.icon}
                          styleClass="icon5"
                          title={item.name}
                          link={item.link}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* <h2 dangerouslySetInnerHTML={{ __html: contacts.name }} /> */}
                <div className="h-50"></div>
                <p className="text-center">{contacts.description}</p>
                <div className="form_container">
                  {responce && (
                    <p className={responce.style}>{responce.message}</p>
                  )}
                  <div className="editor_container p-3">
                    <input
                      className="email my-2"
                      required
                      type="email"
                      placeholder="Your Email"
                      value={email_value}
                      name="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <CustomEditor value={editor_value} onChange={onchange} />
                    <button
                      onClick={handleSendEmail}
                      className="boxed-btn3 mt-5 mr-auto"
                    >
                      {save_caption_value}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
