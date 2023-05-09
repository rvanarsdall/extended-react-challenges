const PokeInstructions = (props) => {
  return (
    <>
      <p>
        Who's that Pokemon?
        <br />
        - The goal of this challenge is to show the shadow of a Pokemon once
        start is clicked while having a Timer that gives 10 seconds for someone
        to guess the Pokemon. Once the timer reaches 0 display the undarkened
        image of the Pokemon along with the name.
        <br />
        - The fetch from the Poke API is already complete and all the
        information you need from it is provided. - This challenge will require
        you to utilize React's lifecycle methods
        <br />
        Suggested work flow
        <br />
        - Find a way to darken the image of the pokemon
        <br />
        - Create a Timer that counts down from 10 to 0
        <br />
        - Make sure the timer does not start until the Start button is pushed
        <br />
        - Make sure the timer does not go into the negatives
        <br />
        - Once the timer reaches 0 the pokemon image should be undarkened and
        the name should be displayed
        <br />- Find a way to make the game restart each time the button is
        pushed (you should not need to refresh the page)
      </p>
    </>
  );
};

export default PokeInstructions;
