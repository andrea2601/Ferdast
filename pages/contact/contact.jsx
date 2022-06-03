const Contact = () => {
  return (
    <div className={styles.formContainer}>
      <form>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Italia</option>
          <option value="canada">Francia</option>
          <option value="usa">Spagna</option>
          <option value="usa">Romania</option>
        </select>

        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style="height:200px"
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Contact;
