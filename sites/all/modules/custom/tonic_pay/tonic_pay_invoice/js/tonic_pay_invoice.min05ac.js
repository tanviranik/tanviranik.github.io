!function(e){e(document).on("click",".tonic-pay-payment-method-area .payment-method",function(t){console.log("clicked"),e("#tonic-pay-payment-submit").prop("disabled",!1);e(".tonic-pay-payment-method-area .payment-method").removeClass("selected"),e(this).addClass("selected");var a=e(this).attr("data-method");e("#payment-method").val(a);var o=e(this).children(".payment-title").text();e(".payment-method-name").html(o),"scratch_card"==a?e(".sctratch-card-input").slideDown("slow"):(e(".sctratch-card-input").slideUp("slow"),e("#scratch-card-number").val("")),"upay"==a&&(e(this).removeClass("selected"),e(".payment-method-name").html(e(".payment-title.airtime").text()),e(".payment-method.airtime").addClass("selected"),e("#payment-method").val("airtime"),e(".modal-coming-soon").modal("show")),"airtime"==a||"upay"==a?(e("#member-verification").prop("disabled",!1),e("#member-verification").slideDown("slow")):(e("#member-verification").prop("disabled",!0),e("#member-verification").slideUp("slow")),"bkash"==a?(e(".tonic-pay-regular-submit").hide(),e(".tonic-pay-bkash-submit").show()):(e(".tonic-pay-bkash-submit").hide(),e(".tonic-pay-regular-submit").show()),"Agent"==a||"airtime2"==a?(e(".agent-payment-form").slideDown("slow"),e("#tonic-pay-payment-submit").prop("disabled",!0)):(e(".agent-payment-form").slideUp("slow"),e("#agent-msisdn").val(""),e("#agent-verification").val(""),e("#tonic-pay-payment-submit").prop("disabled",!1))}),e(document).on("click","#tonic-pay-payment-submit",function(t){e(this).html("Processing...")}),e(document).on("click","#tonic-pay-payment-cancel",function(t){t.preventDefault(),e(this).html("Processing...");var a=e(this).closest("form").attr("action")+"/?s=cancel";e("#common-payment-submit").attr("action",a).submit()}),e(document).on("click","#agent-otp, #resned-otp",function(t){var a=e("#agent-msisdn").val(),o=e("#payment-method").val();e.ajax({url:"/"+getLang()+"/tonic-pay/checking-valid-retailer/"+a+"?payment_method="+o,beforeSend:function(){e("#squeeze-mnp").modal("show")},complete:function(){e("#squeeze-mnp").modal("hide")},type:"POST",success:function(t){if(t.error)e(".agent-payment-form .error").html(t.message).slideDown("slow"),e("#tonic-pay-payment-submit").prop("disabled",!0),e(".agent-payment-form .success").html("").slideUp("slow"),e("#progressBar").slideUp("slow"),e("#resned-otp").slideUp("slow");else{e("#payment-submit").prop("disabled",!1).css("opacity","1"),e(".agent-payment-form .error").html("").slideUp("slow"),e(".agent-payment-form .success").html(t.message).slideDown("slow"),e("#agent-otp").prop("disabled",!0),e("#progressBar").slideDown("slow"),e("#tonic-pay-payment-submit").prop("disabled",!1);var a=10,o=setInterval(function(){document.getElementById("progressBar").value=11-a,(a-=1)<=0&&(e("#resned-otp").slideDown("slow"),e("#progressBar").slideUp("slow"),document.getElementById("progressBar").value=0,clearInterval(o))},1e3)}},cache:!1,contentType:!1,processData:!1})})}(jQuery);