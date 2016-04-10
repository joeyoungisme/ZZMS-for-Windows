/* Dr. Lenu
	Henesys Random/VIP Eye Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("Why hello there! I'm Dr. Lenu, in charge of the cosmetic lenses here at the Henesys Plastic Surgery Shop! With #b#t5152010##k or #b#t5152013##k, you can have the kind of look you've always wanted! All you have to do is find the cosmetic lens that most fits you, then let us take care of the rest. Now, what would you like to use?\r\n#b#L0# Cosmetic Lenses at Henesys (Reg. coupon)#l\r\n#L1# Cosmetic Lenses at Henesys (VIP coupon)#l");
    } else if (status == 1) {
	hair_Colo_new = [];

	var teye = cm.getPlayerStat("FACE") % 100;

	if (cm.getPlayerStat("GENDER") == 0) {
	    teye += 20000;
	} else {
	    teye += 21000;
	}
	hair_Colo_new[0] = teye + 100;
	hair_Colo_new[1] = teye + 200;
	hair_Colo_new[2] = teye + 300;
	hair_Colo_new[3] = teye + 400;
	hair_Colo_new[4] = teye + 500;
	hair_Colo_new[5] = teye + 600;
	hair_Colo_new[6] = teye + 700;

	if (selection == 0) {
	    beauty = 1;
	    cm.sendYesNo("If you use the regular coupon, you'll be assigned a random pair of cosmetic lenses. Do you still want to use #b#t5152010##k and make the change to your eyes?");
	} else if (selection == 1) {
	    beauty = 2;
	    cm.askAvatar("With our specialized machine, you can see yourself after the treatment in advance. What kind of lens would you like to wear? Choose the style of your liking.", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5152010, hair_Colo_new) == 1) {
		cm.sendNext("Enjoy your new and improved cosmetic lenses!");
	    } else {
		cm.sendNext("I'm sorry, but I don't think you have our cosmetic lens coupon with you. We can't proceed without the coupon.");
	    }
	} else {
	    if (cm.setAvatar(5152013, hair_Colo_new[selection]) == 1) {
		cm.sendOk("Enjoy your new and improved cosmetic lenses!");
	    } else {
		cm.sendOk("I'm sorry, but I don't think you have our cosmetic lens coupon with you right now. Without the coupon, I'm afraid I can't do it for you..");
	    }
	}
	cm.dispose();
    }
}
