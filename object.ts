class Person {
	constructor(
		public firstname?: string,
		public lastname?: string,
		public birth?: Date,
		public nickname?: string,
		public heigth?: number
	) {}

	setName(firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname;
		return this;
	}
	setBirth(date){
		this.birth = date;
		return this;
	}
	setNickname(nickname){
		this.nickname = nickname;
		return this;
	}
	setHeight(size){
		this.heigth = size;
		return this;
	}
}

const Marco = new Person();

Marco.setName("Marc-Antoine", "Petit")
	.setBirth(new Date("1992", "04", "15"))
	.setNickname("Gros Marco")
	.setHeight(184);