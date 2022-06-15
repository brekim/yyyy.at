import React from "react"
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../firebase";
import normalizeUrl from 'normalize-url';
const punycode = require("punycode/");

const redirectsRef = collection(db, "redirects");

/*
function ValidateUrl(url)
{

}
*/

export default class CreateRedirect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    }
  }

  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  async attemptSubmit() {
    try {
        const docRef = await addDoc(redirectsRef, {
            emojis: punycode.encode(this.props.emojis),
            redirect: normalizeUrl(this.state.searchQuery)
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    this.setState({
        searchQuery: ""
    });
  }

  render() {
    return  (
      <div>
        <input type="text" value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)}/>
        <button onClick={this.attemptSubmit.bind(this)}>
          Submit
        </button>
      </div>
    );
  }
}

/*
function CreateRedirect(props)
{
    return(
        <div>
            <input type="text" onSubmit={async () => {
                try {
                    const docRef = await addDoc(redirectsRef, {
                      emoji: punycode.encode(props.emojis),
                      redirect: this.state.value
                    });
                    console.log("Document written with ID: ", docRef.id);
                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }
            }}> URL</input>
        </div>
    )
}

export default CreateRedirect;
*/