class SimpleFocGenerator {
    init() {
        this.hideStartup();
    }

    hideStartup() {
        this.setDisplayByClass("startup", "none");
    }

    setDisplayByClass(className, displayValue) {
        var elements = document.getElementsByClassName(className);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = displayValue;
        }
    }

    setByClassToggle(className, shouldShow, displayValue) {
        this.setDisplayByClass(className, shouldShow ? displayValue : "none");
    }

    isChecked(id) {
        var element = document.getElementById(id);
        return element ? element.checked : false;
    }

    getValue(id) {
        var element = document.getElementById(id);
        return element ? element.value : "";
    }

    updateVar(event, withComma) {
        try {
            var value = event.target.value;
            var id = event.target.id;
            var prefix = withComma ? ", " : "";
            document.querySelector("#var" + id).innerHTML = prefix + value;
            document.querySelector("#var2" + id).innerHTML = prefix + value;
        }
        catch (e) {}
    }

    motorcheck() {
    const motorTypes = ["bldc", "stepper", "hybrid"];
    
    motorTypes.forEach(type => {
        this.setDisplayByClass("showon" + type, "none");
        this.setDisplayByClass("hideon" + type, "inline");
    });

    for (const type of motorTypes) {
        if (this.isChecked(type)) {
            this.setDisplayByClass("showon" + type, "inline");
            this.setDisplayByClass("hideon" + type, "none");

            if (type === "stepper" || type === "hybrid") {
                this.setFocModulationSelection(type);
            }

            this.reapplyAlignmentParamVisibility();
            
            // Uncheck any inputs that are now hidden
            motorTypes.forEach(otherType => {
                if (otherType !== type) {
                    this.uncheckHiddenElements("showon" + otherType);
                }
            });
            return;
        }
    }
}

    reapplyAlignmentParamVisibility() {
        var alignmentParams = ["voltagealign", "velocityindex", "sensoroffset", "zeroelectricoffset", "sensordirection"];
        for (var i = 0; i < alignmentParams.length; i++) {
            this.emptycheck(alignmentParams[i]);
        }
    }

    setFocModulationSelection(motorType) {
        this.focmodulationcheck();
    }

    drivercheck() {
        const board = this.getValue("boardselector");
        const isOther = board === "other";
        
        const driveroptions = ["simplefocshield", "simplefocmini", "bg431besc1", "l298n"];
        const pwmoptions = ["3pwm", "6pwm", "2pwm4", "2pwm2", "4pwm"];

        this.setDisplayByClass("showonotherdriverboard", "none");
        driveroptions.forEach(opt => this.setDisplayByClass("showon" + opt, "none"));
        pwmoptions.forEach(opt => this.setDisplayByClass("showon" + opt, "none"));

        if (isOther) {
            this.setDisplayByClass("showonotherdriverboard", "inline");
            
            pwmoptions.forEach(pwm => {
                if (this.isChecked(pwm)) {
                    this.setDisplayByClass("showon" + pwm, "inline");
                }
            });
        }
        else {
            this.uncheckHiddenElements("showonotherdriverboard");
            if (driveroptions.includes(board)) {
                this.setDisplayByClass("showon" + board, "inline");
            }
        }

        this.cleanupHiddenInputs([...driveroptions, ...pwmoptions]);
    }

    sensorcheck() {
        const noneSelected = this.isChecked("nones");
        this.setByClassToggle("showonnones", noneSelected, "inline");
        this.setByClassToggle("showonsensor", !noneSelected, "inline");

        if (noneSelected) {
            this.uncheckHiddenElements("showonsensor");
        }

        const sensoroptions = ["encoder", "halleffect", "analog", "pwm", "blocking", "interrupting"];
        for (var i = 0; i < sensoroptions.length; i++) {
            var isChecked = this.isChecked(sensoroptions[i]);
            this.setByClassToggle("showon" + sensoroptions[i], isChecked, "inline");

            if (!isChecked) {
                this.uncheckHiddenElements("showon" + sensoroptions[i]);
            }
        }

        if (this.isChecked("spi")) {
            const spiValue = this.getValue("spiselector");
            this.setByClassToggle("showonspi", spiValue === "other", "inline");
            this.setByClassToggle("showonas5147", spiValue === "as5147", "inline");
            this.setByClassToggle("showonma730", spiValue === "ma730", "inline");
            
            if (spiValue !== "other") {
                this.uncheckHiddenElements("showonspi");
            }
            if (spiValue !== "as5147") {
                this.uncheckHiddenElements("showonas5147");
            }
            if (spiValue !== "ma730") {
                this.uncheckHiddenElements("showonma730");
            }
        }
        else {
            this.setDisplayByClass("showonma730", "none");
            this.setDisplayByClass("showonas5147", "none");
            this.setDisplayByClass("showonspi", "none");
            
            this.uncheckHiddenElements("showonma730");
            this.uncheckHiddenElements("showonas5147");
            this.uncheckHiddenElements("showonspi");
        }

        if (this.isChecked("i2c")) {
            const i2cValue = this.getValue("i2cselector");
            this.setByClassToggle("showoni2c", i2cValue === "other", "inline");
            this.setByClassToggle("showonas5600", i2cValue === "as5600", "inline");
            this.setByClassToggle("showonas5048", i2cValue === "as5048", "inline");
            this.setByClassToggle("showonanyi2c", true, "inline");
            
            if (i2cValue !== "other") {
                this.uncheckHiddenElements("showoni2c");
            }
            if (i2cValue !== "as5600") {
                this.uncheckHiddenElements("showonas5600");
            }
            if (i2cValue !== "as5048") {
                this.uncheckHiddenElements("showonas5048");
            }
        }
        else {
            this.setDisplayByClass("showonas5048", "none");
            this.setDisplayByClass("showonas5600", "none");
            this.setDisplayByClass("showoni2c", "none");
            this.setDisplayByClass("showonanyi2c", "none");
            
            this.uncheckHiddenElements("showonas5048");
            this.uncheckHiddenElements("showonas5600");
            this.uncheckHiddenElements("showoni2c");
            this.uncheckHiddenElements("showonanyi2c");
        }
    }

    currentsensecheck() {
        const board = this.getValue("currentboardselector");
        const isOther = board === "other";
        const currentOptions = ["simplefocshield", "bg431besc1"];
        const senseMethods = ["nonec", "inline", "lowside"];

        // 1. Global Reset
        this.setByClassToggle("showonothercurrentboard", isOther, "inline");
        currentOptions.forEach(opt => this.setDisplayByClass("showoncurrent" + opt, "none"));
        this.setDisplayByClass("showoninline", "none");
        this.setDisplayByClass("showonlowside", "none");
        this.setDisplayByClass("showonnonec", "none");
        this.setDisplayByClass("showoncurrentsense", "none");

        if (isOther) {
            // --- MANUAL MODE ---
            const noneSelected = this.isChecked("nonec");
            if (noneSelected) {
                this.setDisplayByClass("showonnonec", "inline");
            }
            else if (this.isChecked("inline")) {
                this.setDisplayByClass("showoncurrentsense", "inline");
                this.setDisplayByClass("showoninline", "inline");
            }
            else if (this.isChecked("lowside")) {
                this.setDisplayByClass("showoncurrentsense", "inline");
                this.setDisplayByClass("showonlowside", "inline");
            }
        } else {
            // --- BOARD MODE ---
            // CRITICAL FIX: Uncheck the radio buttons so they don't interfere with the board logic
            senseMethods.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.checked = false;
            });
            this.uncheckHiddenElements("showonothercurrentboard");

            this.setDisplayByClass("showoncurrentsense", "inline");
            this.setDisplayByClass("showoncurrent" + board, "inline");
        }

        this.currentsenseoptionscheck();
    }

    currentsenseoptionscheck() {
        const board = this.getValue("currentboardselector");
        const isOther = board === "other";
        const hasCurrentSense = isOther ? (this.isChecked("inline") || this.isChecked("lowside")) : board !== "other";
        const shouldShow = hasCurrentSense && this.isChecked("skipalign");
        this.setByClassToggle("showonskipalign", shouldShow, "inline");
    }

    motioncontrollercheck() {
        const options = [
            "velocitycontrol", "anglecontrol", "anglenocascadecontrol", 
            "customcontrol", "torquecontrol", "velocityopenloopcontrol", "angleopenloopcontrol"
        ];

        options.forEach(opt => {
            this.setDisplayByClass("showon" + opt, "none");
            this.setDisplayByClass("hideon" + opt, "inline");
        });
        this.setDisplayByClass("showonmotioncontrollers", "none");

        for (const id of options) {
            if (this.isChecked(id)) {
                this.setDisplayByClass("showon" + id, "inline");
                this.setDisplayByClass("hideon" + id, "none");
                
                this.setDisplayByClass("showonmotioncontrollers", "inline");
                
                options.forEach(opt => {
                    if (opt !== id) {
                        this.uncheckHiddenElements("showon" + opt);
                    }
                });
                
                return;
            }
        }
    }

    torquecontrollercheck() {
        const torquecontrolleroptions = ["voltage", "estimatedcurrent", "dccurrent", "foccurrent"];
        for (var i = 0; i < torquecontrolleroptions.length; i++) {
            this.setByClassToggle("showon" + torquecontrolleroptions[i], this.isChecked(torquecontrolleroptions[i]), "inline");
        }
    }

    focmodulationcheck() {
        const focmodulationoptions = ["sinepwm", "trapezoid120", "trapezoid150", "spacevectorpwm"];
        for (var i = 0; i < focmodulationoptions.length; i++) {
            this.setByClassToggle("showon" + focmodulationoptions[i], this.isChecked(focmodulationoptions[i]), "inline");
        }
    }

    commandercheck() {
        this.setByClassToggle("showoncommander", this.isChecked("commander"), "inline");
    }

    monitoringcheck() {
        const isMonitoring = this.isChecked("monitoring");
        this.setByClassToggle("showonmonitoring", isMonitoring, "inline");

        const monitorOptions = ["monitorvariables", "monitordownsample", "monitordecimals", "monitorseparator", "monitorstartchar", "monitorendchar"];
        if (isMonitoring) {
            for (var i = 0; i < monitorOptions.length; i++) {
                this.emptycheck(monitorOptions[i]);
            }
        }
        else {
            for (var j = 0; j < monitorOptions.length; j++) {
                this.setDisplayByClass("showon" + monitorOptions[j], "none");

                this.uncheckHiddenElements("showon" + monitorOptions[j]);
            }
            this.setDisplayByClass("showondisabledebug", "none");
        }

        this.monitoringoptionscheck();
    }

    monitoringoptionscheck() {
        const shouldShow = this.isChecked("monitoring") && this.isChecked("disabledebug");
        this.setByClassToggle("showondisabledebug", shouldShow, "inline");
    }

    uncheckHiddenElements(className) {
        var elements = document.getElementsByClassName(className);
        for (var i = 0; i < elements.length; i++) {
            var inputs = elements[i].querySelectorAll("input[type='radio'], input[type='checkbox']");
            for (var j = 0; j < inputs.length; j++) {
                if (inputs[j].checked) {
                    inputs[j].checked = false;
                    this.setDisplayByClass("showon" + inputs[j].id, "none");
                }
            }
        }
    }

    emptycheck(property) {
        var element = document.getElementById(property);
        var hasValue = element && element.value !== "";
        this.setByClassToggle("showon" + property, hasValue, "inline");
    }

    clearindex() {
        var element = document.getElementById("i");
        if (element) {
            element.value = "";
        }
        this.emptycheck("i");
    }

    copycode() {
        var range = document.createRange();
        range.selectNode(document.getElementById("code"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    }
}

var simpleFocGenerator = new SimpleFocGenerator();

window.onload = function () {
    simpleFocGenerator.init();
};

function changevar(event) {
    simpleFocGenerator.updateVar(event, false);
}

function changevarwithcomma(event) {
    simpleFocGenerator.updateVar(event, true);
}

function motorcheck() {
    simpleFocGenerator.motorcheck();
}

function drivercheck() {
    simpleFocGenerator.drivercheck();
}

function sensorcheck() {
    simpleFocGenerator.sensorcheck();
}

function currentsensecheck() {
    simpleFocGenerator.currentsensecheck();
}

function currentsenseoptionscheck() {
    simpleFocGenerator.currentsenseoptionscheck();
}

function motioncontrollercheck() {
    simpleFocGenerator.motioncontrollercheck();
}

function torquecontrollercheck() {
    simpleFocGenerator.torquecontrollercheck();
}

function focmodulationcheck() {
    simpleFocGenerator.focmodulationcheck();
}

function commandercheck() {
    simpleFocGenerator.commandercheck();
}

function monitoringcheck() {
    simpleFocGenerator.monitoringcheck();
}

function monitoringoptionscheck() {
    simpleFocGenerator.monitoringoptionscheck();
}

function emptycheck(property) {
    simpleFocGenerator.emptycheck(property);
}

function clearindex() {
    simpleFocGenerator.clearindex();
}

function copycode() {
    simpleFocGenerator.copycode();
}