export class affichageLabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomLabs : ["Cyber", "Blockchain", "Maker", "Virtual", "IA", "Coder"],
	    logoLabs : ['cyber-logo.svg','blockchain.svg','maker-logo.svg','virtual-logo.svg','IA-logo.svg','coder-logo.svg'],
      descriptionLabs : ["mettre la description de chaque labs","","","","",""]
    }
  }
  render() {
    const labs = this.state.nomLabs.map((number) => <h1>{number}</h1>);
    const logos = this.state.logoLabs.map((number) =>  <Image src={number}/> );
    const descriptions = this.State.descriptionLabs.map((number) => <p>{number}</p>);
    return (
      <div>
        <ul>{labs}{logos}{descriptions}</ul>
      </div>
    );
  }
}