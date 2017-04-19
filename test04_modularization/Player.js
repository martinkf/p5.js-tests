function Player(input_x, input_y)
{
  this.pos = createVector(input_x, input_y);

  this.attSpd = 100;
  this.attPow = 1;
  
  this.healSpd = 100;
  this.healPow = 1;
  
  this.defHp = 15;
  this.defArmor = 1;

  this.attack = ceil(this.attPow / (this.attSpd / 60));
  this.healing = ceil(this.healPow / (this.healSpd / 60));
  this.defense = this.defHp * this.defArmor;

  this.curHp = this.defHp;

  this.healByAmount = function(input_amountToHeal)
  {
    if (this.curHp + input_amountToHeal > this.defHp)
    {
      this.curHp = this.defHp;
    }
    else 
    {
      this.curHp += input_amountToHeal;
    }
  }

  this.sufferByAmount = function(input_amountToSuffer)
  {
    if (this.curHp - input_amountToSuffer <= 0)
    {
      this.curHp = 0;
      this.die();
    }
    else 
    {
      this.curHp -= input_amountToSuffer;
    }
  }

  this.die = function()
  {
    //deadzzzz
  }


  this.update = function()
  {    
    //
  }

  this.show = function()
  {
    var subelements = [];

    subelements.push(new Textbox
      (
        "player_attackLbl",
        this.pos.x,
        this.pos.y,
        "Attack",
        "red",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_attack",
        this.pos.x + 120,
        this.pos.y,
        this.attack,
        "dark_red",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_attPowLbl",
        this.pos.x,
        this.pos.y + 20,
        "Attack Power",
        "red",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_attPow",
        this.pos.x + 120,
        this.pos.y + 20,
        this.attPow,
        "dark_red",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_attSpdLbl",
        this.pos.x,
        this.pos.y + 40,
        "Attack Speed",
        "red",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_attSpd",
        this.pos.x + 120,
        this.pos.y + 40,
        this.attSpd,
        "dark_red",
        16
      )
    );    

    subelements.push(new Textbox
      (
        "player_healingLbl",
        this.pos.x,
        this.pos.y + 60,
        "Healing",
        "green",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_healing",
        this.pos.x + 120,
        this.pos.y + 60,
        this.healing,
        "dark_green",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_healPowLbl",
        this.pos.x,
        this.pos.y + 80,
        "Healing Power",
        "green",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_healPow",
        this.pos.x + 120,
        this.pos.y + 80,
        this.healPow,
        "dark_green",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_healSpdLbl",
        this.pos.x,
        this.pos.y + 100,
        "Healing Speed",
        "green",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_healSpd",
        this.pos.x + 120,
        this.pos.y + 100,
        this.healSpd,
        "dark_green",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_defenseLbl",
        this.pos.x,
        this.pos.y + 120,
        "Defense",
        "blue",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_defense",
        this.pos.x + 120,
        this.pos.y + 120,
        this.defense,
        "dark_blue",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_defHpLbl",
        this.pos.x,
        this.pos.y + 140,
        "Max HP",
        "blue",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_defHp",
        this.pos.x + 120,
        this.pos.y + 140,
        this.defHp,
        "dark_blue",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_defArmorLbl",
        this.pos.x,
        this.pos.y + 160,
        "Armor",
        "blue",
        16
      )
    );

    subelements.push(new Textbox
      (
        "player_defArmor",
        this.pos.x + 120,
        this.pos.y + 160,
        this.defArmor,
        "dark_blue",
        16
      )
    );

    for (var i = subelements.length - 1; i >= 0; i--) {
      subelements[i].show();      
    };
  }
}