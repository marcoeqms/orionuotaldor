////////////////////////////////////////////////////////////////////////////////
//                           ~ Doors Open/Close~                              //
//                             - Taldor / Quin -                              //
////////////////////////////////////////////////////////////////////////////////
//
// OpenDoor:
// Otevira a zavira dvere v dosahu.
//
// Pouziti:
// Hotkey -> Run script :
// OpenDoor()
//
////////////////////////////////////////////////////////////////////////////////

var OpenDoor_list = '0x3EB2|0x3EB1|0x0675|0x0677|0x0679|0x067B|0x067D|0x067F|0x0681|0x0683|0x0685|0x0687|0x0689|0x068B|0x068D|0x068F|0x0691|0x0693|0x0695|0x0697|0x0699|0x069B|0x069D|0x069F|0x06A1|0x06A3|0x06A5|0x06A7|0x06A9|0x06AB|0x06AD|0x06AF|0x06B1|0x06B3|0x06B5|0x06B7|0x06B9|0x06BB|0x06BD|0x06BF|0x06C1|0x06C3|0x06C5|0x06C7|0x06C9|0x06CB|0x06CD|0x06CF|0x06D1|0x06D3|0x06D5|0x06D7|0x06D9|0x06DB|0x06DD|0x06DF|0x06E1|0x06E3|0x06E5|0x06E7|0x06E9|0x06EB|0x06ED|0x06EF|0x06F1|0x06F3|0x06F5|0x0824|0x0826|0x0828|0x082A|0x082C|0x082E|0x0830|0x0832|0x0839|0x083B|0x083D|0x083F|0x0841|0x0843|0x0845|0x0847|0x084C|0x084E|0x0850|0x0852|0x0854|0x0856|0x0858|0x085A|0x0866|0x0868|0x086A|0x086C|0x086E|0x0870|0x0872|0x0874|0x1FED|0x1FEF|0x1FF1|0x1FF3|0x1FF5|0x1FF7|0x1FF9|0x1FFB|0x00E8|0x00EA|0x00EC|0x00EE|0x00F0|0x00F2|0x00F4|0x00F6|0x0314|0x0316|0x0318|0x031A|0x031C|0x031E|0x0320|0x0322|0x0324|0x0326|0x0328|0x032A|0x032C|0x032E|0x0330|0x0332|0x0334|0x0336|0x0338|0x033A|0x033C|0x033E|0x0340|0x0342|0x0344|0x0346|0x0348|0x034A|0x034C|0x034E|0x0350|0x0352|0x0354|0x0356|0x0358|0x035A|0x035C|0x035E|0x0360|0x0362'
var CloseDoor_list = '0x3ED5|0x3ED4|0x0676|0x0678|0x067A|0x067C|0x067E|0x0680|0x0682|0x0684|0x0686|0x0688|0x068A|0x068C|0x068E|0x0690|0x0692|0x0694|0x0696|0x0698|0x069A|0x069C|0x069E|0x06A0|0x06A2|0x06A4|0x06A6|0x06A8|0x06AA|0x06AC|0x06AE|0x06B0|0x06B2|0x06B4|0x06B6|0x06B8|0x06BA|0x06BC|0x06BE|0x06C0|0x06C2|0x06C4|0x06C6|0x06C8|0x06CA|0x06CC|0x06CE|0x06D0|0x06D2|0x06D4|0x06D6|0x06D8|0x06DA|0x06DC|0x06DE|0x06E0|0x06E2|0x06E4|0x06E6|0x06E8|0x06EA|0x06EC|0x06EE|0x06F0|0x06F2|0x06F4|0x06F6|0x0825|0x0827|0x0829|0x082A|0x082C|0x082E|0x0831|0x0833|0x083A|0x083C|0x083E|0x0840|0x0842|0x0844|0x0846|0x0848|0x084D|0x084F|0x0851|0x0853|0x0855|0x0857|0x0859|0x085B|0x0867|0x0869|0x086B|0x086D|0x086F|0x0871|0x0873|0x0875|0x1FEE|0x1FF0|0x1FF2|0x1FF4|0x1FF6|0x1FF8|0x1FFA|0x1FFC|0x00E9|0x00EB|0x00ED|0x00EF|0x00F1|0x00F3|0x00F5|0x00F7|0x0315|0x0317|0x0319|0x031B|0x031D|0x031F|0x0321|0x0323|0x0325|0x0327|0x0329|0x032B|0x032D|0x032F|0x0331|0x0333|0x0335|0x0337|0x0339|0x033B|0x033D|0x033F|0x0341|0x0343|0x0345|0x0347|0x0349|0x034B|0x034D|0x034F|0x0351|0x0353|0x0355|0x0357|0x0359|0x035B|0x035D|0x035F|0x0361|0x0363'

function OpenDoor() {
  var doors = Orion.FindType('0x067F|' + OpenDoor_list, '-1', ground, '', 2);

  if (doors.length) {
    Orion.UseObject(doors[0]);
    //Orion.Print('-1', 'OTEVIRAM');
    Orion.CharPrint('self', '0x44', '-- OTEVIRAM --');
    var quantity = doors.length;
    if (quantity > 1) {
      Orion.Wait(200);
      var doors = Orion.FindType(OpenDoor_list, '-1', ground, '', 1);
      if (doors.length) {
        Orion.UseObject(doors[0]);
      }
    }
  } else {
    CloseDoor();
  }
}

function CloseDoor(_private) {
  var doors = Orion.FindType(CloseDoor_list, '-1', ground, '', 2);

  if (doors != null && doors.length) {
    //Orion.Print('-1', 'ZAVIRAM');
    Orion.CharPrint('self', '0x22', '-- ZAVIRAM --');
    var quantity = doors.length;
    for (i = 0; i < quantity; i++) {
      Orion.UseObject(doors[i]);
      Orion.Wait(30);
    }
  }
}
