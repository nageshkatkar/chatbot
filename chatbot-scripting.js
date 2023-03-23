var flag=0;
var currentClass=0;
var sub=0; 
var questionNumber = 1, checkans=0,score=0,id=1;

$(document).ready(function(){

    $(window).load(function(){
        $("div.main_content").css("height",window.innerHeight-60);
        $("div.foot").css("top",window.innerHeight-60-60);
        $("div.chatting").css("height", window.innerHeight - 185);
    });

    $(window).resize(function(){
        $("div.main_content").css("height",window.innerHeight-60);
        $("div.foot").css("top",window.innerHeight-60-60);
        $("div.chatting").css("height",window.innerHeight-185);
    });

    const chatFunctionality = () => {
        var elem = document.getElementById("chatPlace");
        elem.scrollBy(0,2000);
        var chatInput = document.getElementById("input").value.toLowerCase();
        document.getElementById("input").value = "";
        if (chatInput == "") {
            
        }
        else {
                $("div.chatting ol").append("<li class='ab'>"+chatInput+"</li><br>");
     
                if(flag==0){

                    $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Start Test<br>1. Maths<br>2. Science</li><br>");
                    flag = 1; 
                }
                else if(flag==1){
                    if(chatInput==1 || chatInput==2){
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Chose Class<br>1. Class 1<br>2. Class 2<br>3. Class 3<br>4. Class 4<br>5. Class 5</li><br>");
                        flag = 2;        
                        sub = chatInput;
                    }else{
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Start Test<br>1. Maths<br>2. Science</li><br>");
                    }
                }
                else if(flag==2){
                    if(chatInput==1 || chatInput==2 || chatInput==3 || chatInput==4 || chatInput==5){
                        currentClass = chatInput;
                        flag = 3;
                    }else{
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Chose Class<br>1. Class 1<br>2. Class 2<br>3. Class 3<br>4. Class 4<br>5. Class 5</li><br>");
                    }
                }
                   
                if(currentClass==1 && sub==1){
                    
                    if(questionNumber==1 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Class 1 Maths Test</li><br>");
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. 23 ___ 19<br>1. =<br>2. <<br>3. ><br>4. None of these</li><br>");
                        checkans = 1;
                    }   
                    else if(questionNumber==1 && checkans==1){
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                                if(chatInput==3){
                                    score++;
                                }
                                else{

                                }
                                checkans = 0;    
                                questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. 23 ___ 19<br>1. =<br>2. <<br>3. ><br>4. None of these</li><br>");
                        }
                    }
                    
                    if(questionNumber==2 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. ___ comes before 52<br>1. 50<br>2. 51<br>3. 52<br>4. 53</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==2 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. ___ comes before 52<br>1. 50<br>2. 51<br>3. 52<br>4. 53</li><br>");
                        }
                    }


                    if(questionNumber==3 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. 2 tens and 5 ones = ___<br>1. 50<br>2. 52<br>3. 25<br>4. 23</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==3 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. 2 tens and 5 ones = ___<br>1. 50<br>2. 52<br>3. 25<br>4. 23</li><br>");
                        }
                    }


                    if(questionNumber==4 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. 104 ___ 113<br>1. ><br>2. =<br>3. <<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==4 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. 104 ___ 113<br>1. ><br>2. =<br>3. <<br>4. None of these</li><br>");
                        }
                    }

                    if(questionNumber==5 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. ___ comes after 79<br>1. 78<br>2. 79<br>3. 80<br>4. 81</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==5 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. ___ comes after 79<br>1. 78<br>2. 79<br>3. 80<br>4. 81</li><br>");
                        }
                    }


                    if(questionNumber==6 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. 3 tens and 9 ones = ___<br>1. 93<br>2. 39<br>3. 29<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==6 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. 3 tens and 9 ones = ___<br>1. 93<br>2. 39<br>3. 29<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==7 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. 45, 46, 47, ___, 49, 50, ___<br>1. 48 and 50<br>2. 48 and 51<br>3. 47 and 51<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==7 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. 45, 46, 47, ___, 49, 50, ___<br>1. 48 and 50<br>2. 48 and 51<br>3. 47 and 51<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==8 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. ___ comes in between 37 and 39.<br>1. 36<br>2. 30<br>3. 40<br>4. 38</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==8 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. ___ comes in between 37 and 39.<br>1. 36<br>2. 30<br>3. 40<br>4. 38</li><br>");
                        }
                    }


                    if(questionNumber==9 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. ___ tens + 5 ones = 45<br>1. 3<br>2. 4<br>3. 5<br>4. 6</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==9 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. ___ tens + 5 ones = 45<br>1. 3<br>2. 4<br>3. 5<br>4. 6</li><br>");
                        }
                    }

                    if(questionNumber==10 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. 42 = ___tens + ___ones<br>1. 4 and 2<br>2. 2 and 4<br>3. 5 and 2<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==10 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            $("li#score").remove();
                            $("div.chatting ol").append('<li id="score" class="xy" style="line-height: 30px; padding:20px;"></li><br>');                        
                            document.getElementById("score").innerHTML = "Your total score "+score+"/10";
                            id++;
                            checkans = 0;    
                            questionNumber = 1;
                            flag=0;
                            currentClass=0;
                            sub=0; 
                            questionNumber = 1;
                            checkans=0;
                            score=0;

                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Start Test<br>1. Maths<br>2. Science</li><br>");
                            flag = 1; 
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. 42 = ___tens + ___ones<br>1. 4 and 2<br>2. 2 and 4<br>3. 5 and 2<br>4. None of these</li><br>");
                        }
                    }

                }



                if(currentClass==2 && sub==1){


                    if(questionNumber==1 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Class 2 Maths Test</li><br>");
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. Add 1 to largest 3 digit number<br>1. 2000<br>2. 1000<br>3. 3000<br>4. 999</li><br>");
                        checkans = 1;
                    }   
                    else if(questionNumber==1 && checkans==1){
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                                if(chatInput==2){
                                    score++;
                                }
                                else{

                                }
                                checkans = 0;    
                                questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. Add 1 to largest 3 digit number<br>1. 2000<br>2. 1000<br>3. 3000<br>4. 999</li><br>");
                        }
                    }
                    
                    if(questionNumber==2 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. Add 450 to smallest 3-digit number<br>1. 650<br>2. 450<br>3. 550<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==2 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. Add 450 to smallest 3-digit number<br>1. 650<br>2. 450<br>3. 550<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==3 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. 752 – 245 = ___<br>1. 705<br>2. 507<br>3. 570<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==3 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. 752 – 245 = ___<br>1. 705<br>2. 507<br>3. 570<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==4 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. Multiplication is ___<br>1. Repeated subtraction<br>2. Addition<br>3. Repeated addition<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==4 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. Multiplication is ___<br>1. Repeated subtraction<br>2. Addition<br>3. Repeated addition<br>4. None of these</li><br>");
                        }
                    }

                    if(questionNumber==5 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. Fifty seven rupees and seventy five paise = ___<br>1. Rs. 75.57<br>2. Rs. 57.75<br>3. Rs. 57.57<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==5 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. Fifty seven rupees and seventy five paise = ___<br>1. Rs. 75.57<br>2. Rs. 57.75<br>3. Rs. 57.57<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==6 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. Convert 950 paise into rupees<br>1. Rs. 90.50<br>2. Rs. 9.05<br>3. Rs. 9.50<br>4. Rs. 90.05</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==6 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. Convert 950 paise into rupees<br>1. Rs. 90.50<br>2. Rs. 9.05<br>3. Rs. 9.50<br>4. Rs. 90.05</li><br>");
                        }
                    }


                    if(questionNumber==7 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. How many days are there in a week?<br>1. 5<br>2. 7<br>3. 9<br>4. 8</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==7 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. How many days are there in a week?<br>1. 5<br>2. 7<br>3. 9<br>4. 8</li><br>");
                        }
                    }


                    if(questionNumber==8 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. How many months are there in a year?<br>1. 11<br>2. 12<br>3. 13<br>4. 14</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==8 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. How many months are there in a year?<br>1. 11<br>2. 12<br>3. 13<br>4. 14</li><br>");
                        }
                    }


                    if(questionNumber==9 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. How many weeks are present in a year?<br>1. 49<br>2. 50<br>3. 51<br>4. 52</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==9 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. How many weeks are present in a year?<br>1. 49<br>2. 50<br>3. 51<br>4. 52</li><br>");
                        }
                    }

                    if(questionNumber==10 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. In February month ___ days are there<br>1. 28<br>2. 29<br>3. 30<br>4. 31</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==10 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            $("li#score").remove();
                            $("div.chatting ol").append('<li id="score" class="xy" style="line-height: 30px; padding:20px;"></li><br>');                        
                            document.getElementById("score").innerHTML = "Your total score "+score+"/10";
                            id++;
                            checkans = 0;    
                            questionNumber = 1;
                            flag=0;
                            currentClass=0;
                            sub=0; 
                            questionNumber = 1;
                            checkans=0;
                            score=0;

                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Start Test<br>1. Maths<br>2. Science</li><br>");
                            flag = 1; 
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. In February month ___ days are there<br>1. 28<br>2. 29<br>3. 30<br>4. 31</li><br>");
                        }
                    }


                }


                if(currentClass==3 && sub==1){


                    if(questionNumber==1 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Class 3 Maths Test</li><br>");
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. What is the predecessor of 56345?<br>1. 56345<br>2. 56346<br>3. 56344<br>4. None of these</li><br>");
                        checkans = 1;
                    }   
                    else if(questionNumber==1 && checkans==1){
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                                if(chatInput==3){
                                    score++;
                                }
                                else{

                                }
                                checkans = 0;    
                                questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. What is the predecessor of 56345?<br>1. 56345<br>2. 56346<br>3. 56344<br>4. None of these</li><br>");
                        }
                    }
                    
                    if(questionNumber==2 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. 35 thousands = ___ hundreds<br>1. 35<br>2. 350<br>3. 3500<br>4. 35000</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==2 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. 35 thousands = ___ hundreds<br>1. 35<br>2. 350<br>3. 3500<br>4. 35000</li><br>");
                        }
                    }


                    if(questionNumber==3 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. 103 + 52 + 11012 = 11012 + ___ + 103<br>1. 103<br>2. 52<br>3. 11012<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==3 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. 103 + 52 + 11012 = 11012 + ___ + 103<br>1. 103<br>2. 52<br>3. 11012<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==4 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. 1927 + 2738 has which number at hundred digit?<br>1. 6<br>2. 7<br>3. 8<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==4 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. 1927 + 2738 has which number at hundred digit?<br>1. 6<br>2. 7<br>3. 8<br>4. None of these</li><br>");
                        }
                    }

                    if(questionNumber==5 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. 818 * 9815 * ___ = 0<br>1. 815<br>2. 9815<br>3. 50<br>4. 0</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==5 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. 818 * 9815 * ___ = 0<br>1. 815<br>2. 9815<br>3. 50<br>4. 0</li><br>");
                        }
                    }


                    if(questionNumber==6 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. ___ / 11 = 8<br>1. 66<br>2. 88<br>3. 77<br>4. 99</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==6 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. ___ / 11 = 8<br>1. 66<br>2. 88<br>3. 77<br>4. 99</li><br>");
                        }
                    }


                    if(questionNumber==7 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. ___ / 220 = 98 Quotient and 90 Remainder<br>1. 21650<br>2. 22650<br>3. 23650<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==7 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. ___ / 220 = 98 Quotient and 90 Remainder<br>1. 21650<br>2. 22650<br>3. 23650<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==8 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. Write the three fractions equivalent to 3/7<br>1. 3/7, 2/14, 6/14<br>2. 6/14, 9/21, 12/28<br>3. 6/7, 3/14, 9/21<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==8 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. Write the three fractions equivalent to 3/7<br>1. 3/7, 2/14, 6/14<br>2. 6/14, 9/21, 12/28<br>3. 6/7, 3/14, 9/21<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==9 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. What unit of length would you choose to measure the length of your pen?<br>1. Meter<br>2. Kilometer<br>3. Centimeter<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==9 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. What unit of length would you choose to measure the length of your pen?<br>1. Meter<br>2. Kilometer<br>3. Centimeter<br>4. None of these</li><br>");
                        }
                    }

                    if(questionNumber==10 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. 1 kg = ___ g<br>1. 250g<br>2. 500g<br>3. 750g<br>4. 1000g</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==10 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            $("li#score").remove();
                            $("div.chatting ol").append('<li id="score" class="xy" style="line-height: 30px; padding:20px;"></li><br>');                        
                            document.getElementById("score").innerHTML = "Your total score "+score+"/10";
                            id++;
                            checkans = 0;    
                            questionNumber = 1;
                            flag=0;
                            currentClass=0;
                            sub=0; 
                            questionNumber = 1;
                            checkans=0;
                            score=0;

                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Start Test<br>1. Maths<br>2. Science</li><br>");
                            flag = 1; 
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. 1 kg = ___ g<br>1. 250g<br>2. 500g<br>3. 750g<br>4. 1000g</li><br>");
                        }
                    }


                }



                if(currentClass==4 && sub==1){


                    if(questionNumber==1 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Class 4 Maths Test</li><br>");
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. What you will get after adding 1 to greatest 6-digit number?<br>1. 100000<br>2. 999999<br>3. 99999999<br>4. 1000000</li><br>");
                        checkans = 1;
                    }   
                    else if(questionNumber==1 && checkans==1){
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                                if(chatInput==4){
                                    score++;
                                }
                                else{

                                }
                                checkans = 0;    
                                questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. What you will get after adding 1 to greatest 6-digit number?<br>1. 100000<br>2. 999999<br>3. 99999999<br>4. 1000000</li><br>");
                        }
                    }
                    
                    if(questionNumber==2 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. If a number is subtracted from itself, then the result is ___<br>1. Number itself<br>2. Zero<br>3. 1<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==2 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. If a number is subtracted from itself, then the result is ___<br>1. Number itself<br>2. Zero<br>3. 1<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==3 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. 157882 - 45067 + 12036 = ___<br>1. 142851<br>2. 412851<br>3. 124851<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==3 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. 157882 - 45067 + 12036 = ___<br>1. 142851<br>2. 412851<br>3. 124851<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==4 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. 30677 ÷ 11, find the quotient and the remainder<br>1. 2788 and 9<br>2. 2688 and 9<br>3. 2688 and 6<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==4 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. 30677 ÷ 11, find the quotient and the remainder<br>1. 2788 and 9<br>2. 2688 and 9<br>3. 2688 and 6<br>4. None of these</li><br>");
                        }
                    }

                    if(questionNumber==5 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. Which number is divisible by 4?<br>1. 25688<br>2. 13622<br>3. 34534<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==5 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. Which number is divisible by 4?<br>1. 25688<br>2. 13622<br>3. 34534<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==6 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. Write two factors of 36 whose sum is 13<br>1. 2 & 18<br>2. 9 & 5<br>3. 4 & 9<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==6 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. Write two factors of 36 whose sum is 13<br>1. 2 & 18<br>2. 9 & 5<br>3. 4 & 9<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==7 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. What is the LCM of 6, 10, and 12?<br>1. 12<br>2. 10<br>3. 60<br>4. 6</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==7 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. What is the LCM of 6, 10, and 12?<br>1. 12<br>2. 10<br>3. 60<br>4. 6</li><br>");
                        }
                    }


                    if(questionNumber==8 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. What is the decimal form of 25/10?<br>1. 25<br>2. 2.5<br>3. 0.25<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==8 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. What is the decimal form of 25/10?<br>1. 25<br>2. 2.5<br>3. 0.25<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==9 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. 4565.98 ___ 4565.098<br>1. =<br>2. <<br>3. ><br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==9 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. 4565.98 ___ 4565.098<br>1. =<br>2. <<br>3. ><br>4. None of these</li><br>");
                        }
                    }

                    if(questionNumber==10 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. 172 L 5 ml is equal to ___ ml<br>1. 1725 ml<br>2. 172500 ml<br>3. 172005 ml<br>4. 172050 ml</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==10 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            $("li#score").remove();
                            $("div.chatting ol").append('<li id="score" class="xy" style="line-height: 30px; padding:20px;"></li><br>');                        
                            document.getElementById("score").innerHTML = "Your total score "+score+"/10";
                            id++;
                            checkans = 0;    
                            questionNumber = 1;
                            flag=0;
                            currentClass=0;
                            sub=0; 
                            questionNumber = 1;
                            checkans=0;
                            score=0;

                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Start Test<br>1. Maths<br>2. Science</li><br>");
                            flag = 1; 
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. 172 L 5 ml is equal to ___ ml<br>1. 1725 ml<br>2. 172500 ml<br>3. 172005 ml<br>4. 172050 ml</li><br>");
                        }
                    }


                }


                if(currentClass==5 && sub==1){


                    if(questionNumber==1 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Class 5 Maths Test</li><br>");
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. Length and breadth of a rectangle is 10 m and 8m respectively. Find the area of the rectangle<br>1. 120 sq. m<br>2. 100 sq. m<br>3. 80 sq. m<br>4. None of these</li><br>");
                        checkans = 1;
                    }   
                    else if(questionNumber==1 && checkans==1){
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                                if(chatInput==3){
                                    score++;
                                }
                                else{

                                }
                                checkans = 0;    
                                questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. Length and breadth of a rectangle is 10 m and 8m respectively. Find the area of the rectangle<br>1. 120 sq. m<br>2. 100 sq. m<br>3. 80 sq. m<br>4. None of these</li><br>");
                        }
                    }
                    
                    if(questionNumber==2 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. If Cost Price is Rs. 85 and Selling Price is 105, then what is the profit?<br>1. Rs. 15<br>2. Rs. 20<br>3. Rs. 25<br>4. Rs. 30</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==2 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. If Cost Price is Rs. 85 and Selling Price is 105, then what is the profit?<br>1. Rs. 15<br>2. Rs. 20<br>3. Rs. 25<br>4. Rs. 30</li><br>");
                        }
                    }


                    if(questionNumber==3 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. Ram bought a pen for Rs. 20 and sold it for Rs. 25. Find his percentage of gain<br>1. 10%<br>2. 15%<br>3. 20%<br>4. 25%</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==3 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. Ram bought a pen for Rs. 20 and sold it for Rs. 25. Find his percentage of gain<br>1. 10%<br>2. 15%<br>3. 20%<br>4. 25%</li><br>");
                        }
                    }


                    if(questionNumber==4 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. 75% of Rs 1200 is equal to ___<br>1. Rs. 750<br>2. Rs. 900<br>3. Rs. 800<br>4. Rs. 950</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==4 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. 75% of Rs 1200 is equal to ___<br>1. Rs. 750<br>2. Rs. 900<br>3. Rs. 800<br>4. Rs. 950</li><br>");
                        }
                    }

                    if(questionNumber==5 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. 275% of 2 liters is equal to ___<br>1. 4.5 Liters<br>2. 5 Liters<br>3. 5.5 Liters<br>4. 6 Liters</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==5 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. 275% of 2 liters is equal to ___<br>1. 4.5 Liters<br>2. 5 Liters<br>3. 5.5 Liters<br>4. 6 Liters</li><br>");
                        }
                    }


                    if(questionNumber==6 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. 2578 m = ________ km<br>1. 2.578 km<br>2. 25.78 km<br>3. 257.8 km<br>4. 0.2578 km</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==6 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. 2578 m = ________ km<br>1. 2.578 km<br>2. 25.78 km<br>3. 257.8 km<br>4. 0.2578 km</li><br>");
                        }
                    }


                    if(questionNumber==7 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. Convert 0.0075 into fraction<br>1. 75/1000<br>2. 750/10000<br>3. 75/10000<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==7 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. Convert 0.0075 into fraction<br>1. 75/1000<br>2. 750/10000<br>3. 75/10000<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==8 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. Every prime number is odd except ___<br>1. 0<br>2. 1<br>3. 2<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==8 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. Every prime number is odd except ___<br>1. 0<br>2. 1<br>3. 2<br>4. None of these</li><br>");
                        }
                    }


                    if(questionNumber==9 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. ___ number is neither prime nor composite number<br>1. 0<br>2. 2<br>3. 1<br>4. None of these</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==9 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. ___ number is neither prime nor composite number<br>1. 0<br>2. 2<br>3. 1<br>4. None of these</li><br>");
                        }
                    }

                    if(questionNumber==10 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. What is the place value of 5 in 7569423?<br>1. 5000<br>2. 50000<br>3. 500000<br>4. 5000000</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==10 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            $("li#score").remove();
                            $("div.chatting ol").append('<li id="score" class="xy" style="line-height: 30px; padding:20px;"></li><br>');                        
                            document.getElementById("score").innerHTML = "Your total score "+score+"/10";
                            id++;
                            checkans = 0;    
                            questionNumber = 1;
                            flag=0;
                            currentClass=0;
                            sub=0; 
                            questionNumber = 1;
                            checkans=0;
                            score=0;

                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Start Test<br>1. Maths<br>2. Science</li><br>");
                            flag = 1; 
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. What is the place value of 5 in 7569423?<br>1. 5000<br>2. 50000<br>3. 500000<br>4. 5000000</li><br>");
                        }
                    }


                }


                if(currentClass==1 && sub==2){


                    if(questionNumber==1 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Class 1 Science Test</li><br>");
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. Which animal lays eggs?<br>1. Dog<br>2. Cat<br>3. Duck<br>4. Sheep</li><br>");
                        checkans = 1;
                    }   
                    else if(questionNumber==1 && checkans==1){
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                                if(chatInput==3){
                                    score++;
                                }
                                else{

                                }
                                checkans = 0;    
                                questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. Which animal lays eggs?<br>1. Dog<br>2. Cat<br>3. Duck<br>4. Sheep</li><br>");
                        }
                    }
                    
                    if(questionNumber==2 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. A male cow is called?<br>1. Ox<br>2. Dog<br>3. Sheep<br>4. Monkey</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==2 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. A male cow is called?<br>1. Ox<br>2. Dog<br>3. Sheep<br>4. Monkey</li><br>");
                        }
                    }


                    if(questionNumber==3 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. All animals need food, air, and ___ to survive.<br>1. House<br>2. Water<br>3. Chocolate<br>4. Fruits</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==3 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. All animals need food, air, and ___ to survive.<br>1. House<br>2. Water<br>3. Chocolate<br>4. Fruits</li><br>");
                        }
                    }


                    if(questionNumber==4 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. Which one is a fur-bearing animal?<br>1. Hen<br>2. Crocodile<br>3. Tortoise<br>4. Cat</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==4 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. Which one is a fur-bearing animal?<br>1. Hen<br>2. Crocodile<br>3. Tortoise<br>4. Cat</li><br>");
                        }
                    }

                    if(questionNumber==5 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. What is Earth’s only natural satellite?<br>1. Sun<br>2. Mars<br>3. Venus<br>4. Moon</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==5 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. What is Earth’s only natural satellite?<br>1. Sun<br>2. Mars<br>3. Venus<br>4. Moon</li><br>");
                        }
                    }


                    if(questionNumber==6 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. The tree has a branch filled with green ____<br>1. Hair<br>2. Root<br>3. Leaves<br>4. Trunk</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==6 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. The tree has a branch filled with green ____<br>1. Hair<br>2. Root<br>3. Leaves<br>4. Trunk</li><br>");
                        }
                    }


                    if(questionNumber==7 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. What part of the body helps you move?<br>1. Eyes<br>2. Lungs<br>3. Pancreas<br>4. Muscles</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==7 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. What part of the body helps you move?<br>1. Eyes<br>2. Lungs<br>3. Pancreas<br>4. Muscles</li><br>");
                        }
                    }


                    if(questionNumber==8 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. The two holes of the nose are called?<br>1. Eyelids<br>2. Nostrils<br>3. Nails<br>4. Hair</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==8 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. The two holes of the nose are called?<br>1. Eyelids<br>2. Nostrils<br>3. Nails<br>4. Hair</li><br>");
                        }
                    }


                    if(questionNumber==9 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. What star shines in the day and provides light?<br>1. Moon<br>2. Venus<br>3. Mars<br>4. Sun</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==9 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. What star shines in the day and provides light?<br>1. Moon<br>2. Venus<br>3. Mars<br>4. Sun</li><br>");
                        }
                    }

                    if(questionNumber==10 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. Legs have feet and arms have ____.<br>1. Ankles<br>2. Pelvis<br>3. Hands<br>4. Skull</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==10 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            $("li#score").remove();
                            $("div.chatting ol").append('<li id="score" class="xy" style="line-height: 30px; padding:20px;"></li><br>');                        
                            document.getElementById("score").innerHTML = "Your total score "+score+"/10";
                            id++;
                            checkans = 0;    
                            questionNumber = 1;
                            flag=0;
                            currentClass=0;
                            sub=0; 
                            questionNumber = 1;
                            checkans=0;
                            score=0;

                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Start Test<br>1. Maths<br>2. Science</li><br>");
                            flag = 1; 
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. Legs have feet and arms have ____.<br>1. Ankles<br>2. Pelvis<br>3. Hands<br>4. Skull</li><br>");
                        }
                    }


                }


                if(currentClass==2 && sub==2){


                    if(questionNumber==1 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Class 2 Science Test</li><br>");
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. Animals that suckle their young one are called ____.<br>1. Reptiles<br>2. Birds<br>3. Amphibians<br>4. Mammals</li><br>");
                        checkans = 1;
                    }   
                    else if(questionNumber==1 && checkans==1){
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                                if(chatInput==4){
                                    score++;
                                }
                                else{

                                }
                                checkans = 0;    
                                questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. Animals that suckle their young one are called ____.<br>1. Reptiles<br>2. Birds<br>3. Amphibians<br>4. Mammals</li><br>");
                        }
                    }
                    
                    if(questionNumber==2 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. What part of the plant conducts photosynthesis?<br>1. Branch<br>2. Leaf<br>3. Root<br>4. Trunk</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==2 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. What part of the plant conducts photosynthesis?<br>1. Branch<br>2. Leaf<br>3. Root<br>4. Trunk</li><br>");
                        }
                    }


                    if(questionNumber==3 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3.  What is the boiling point of water?<br>1. 25 degree celsius<br>2. 50 degree celsius<br>3. 75 degree celsius<br>4. 100 degree celsius</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==3 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3.  What is the boiling point of water?<br>1. 25 degree celsius<br>2. 50 degree celsius<br>3. 75 degree celsius<br>4. 100 degree celsius</li><br>");
                        }
                    }


                    if(questionNumber==4 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. Which is the largest land animal?<br>1. Lion<br>2. Tiger<br>3. Elephant<br>4. Rhinoceros</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==4 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. Which is the largest land animal?<br>1. Lion<br>2. Tiger<br>3. Elephant<br>4. Rhinoceros</li><br>");
                        }
                    }

                    if(questionNumber==5 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. ____ helps pump blood through the entire body.<br>1. Lungs<br>2. Kidney<br>3. Heart<br>4. Brain</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==5 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. ____ helps pump blood through the entire body.<br>1. Lungs<br>2. Kidney<br>3. Heart<br>4. Brain</li><br>");
                        }
                    }


                    if(questionNumber==6 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. How does a dog express happiness?<br>1. Twiching ears<br>2. Moving head<br>3. Closing eyes<br>4. Wagging tail</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==6 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. How does a dog express happiness?<br>1. Twiching ears<br>2. Moving head<br>3. Closing eyes<br>4. Wagging tail</li><br>");
                        }
                    }


                    if(questionNumber==7 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. If one boils water it will convert into ____.<br>1. Mist<br>2. Stream<br>3. Clouds<br>4. Snow</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==7 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. If one boils water it will convert into ____.<br>1. Mist<br>2. Stream<br>3. Clouds<br>4. Snow</li><br>");
                        }
                    }


                    if(questionNumber==8 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. When you push something, you apply ____.<br>1. Force<br>2. Acceleration<br>3. Mass<br>4. Compression</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==8 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. When you push something, you apply ____.<br>1. Force<br>2. Acceleration<br>3. Mass<br>4. Compression</li><br>");
                        }
                    }


                    if(questionNumber==9 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. Where does our food collect after we chew and swallow it?<br>1. Small intestine<br>2. Large intestine<br>3. Stomach<br>4. Liver</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==9 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. Where does our food collect after we chew and swallow it?<br>1. Small intestine<br>2. Large intestine<br>3. Stomach<br>4. Liver</li><br>");
                        }
                    }

                    if(questionNumber==10 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. Which material from the following has the highest transparency?<br>1. Paper<br>2. Wood<br>3. Metal<br>4. Glass</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==10 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            $("li#score").remove();
                            $("div.chatting ol").append('<li id="score" class="xy" style="line-height: 30px; padding:20px;"></li><br>');                        
                            document.getElementById("score").innerHTML = "Your total score "+score+"/10";
                            id++;
                            checkans = 0;    
                            questionNumber = 1;
                            flag=0;
                            currentClass=0;
                            sub=0; 
                            questionNumber = 1;
                            checkans=0;
                            score=0;

                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Start Test<br>1. Maths<br>2. Science</li><br>");
                            flag = 1; 
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. Which material from the following has the highest transparency?<br>1. Paper<br>2. Wood<br>3. Metal<br>4. Glass</li><br>");
                        }
                    }


                }




                if(currentClass==3 && sub==2){


                    if(questionNumber==1 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Class 3 Science Test</li><br>");
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. What tissue connects muscles to bones?<br>1. Skin<br>2. Blood vessels<br>3. Fat<br>4. Tendon</li><br>");
                        checkans = 1;
                    }   
                    else if(questionNumber==1 && checkans==1){
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                                if(chatInput==4){
                                    score++;
                                }
                                else{

                                }
                                checkans = 0;    
                                questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. What tissue connects muscles to bones?<br>1. Skin<br>2. Blood vessels<br>3. Fat<br>4. Tendon</li><br>");
                        }
                    }
                    
                    if(questionNumber==2 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. Which nutrient plays an essential role in muscle-building?<br>1. Protein<br>2. Carbohydrate<br>3. Iron<br>4. Fat</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==2 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. Which nutrient plays an essential role in muscle-building?<br>1. Protein<br>2. Carbohydrate<br>3. Iron<br>4. Fat</li><br>");
                        }
                    }


                    if(questionNumber==3 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3.  Plants need which gas to perform photosynthesis?<br>1. Hydrogen<br>2. Carbon monoxide<br>3. Carbon dioxide<br>4. Oxygen</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==3 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3.  Plants need which gas to perform photosynthesis?<br>1. Hydrogen<br>2. Carbon monoxide<br>3. Carbon dioxide<br>4. Oxygen</li><br>");
                        }
                    }


                    if(questionNumber==4 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. Which scientist proposed the three laws of motion?<br>1. Isaac Newton<br>2. Thomas Alva Edison<br>3. Albert Einstein<br>4. Stephen Hawking</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==4 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. Which scientist proposed the three laws of motion?<br>1. Isaac Newton<br>2. Thomas Alva Edison<br>3. Albert Einstein<br>4. Stephen Hawking</li><br>");
                        }
                    }

                    if(questionNumber==5 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. Earth is surrounded by layers of gases collectively called the _____.<br>1. Hydrosphere<br>2. Stratosphere<br>3. Atmosphere<br>4. Ozone layer</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==5 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. Earth is surrounded by layers of gases collectively called the _____.<br>1. Hydrosphere<br>2. Stratosphere<br>3. Atmosphere<br>4. Ozone layer</li><br>");
                        }
                    }


                    if(questionNumber==6 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. Which system of the body controls the senses?<br>1. Circulatory system<br>2. Digestive system<br>3. Nervous system<br>4. Skeletal system</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==6 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. Which system of the body controls the senses?<br>1. Circulatory system<br>2. Digestive system<br>3. Nervous system<br>4. Skeletal system</li><br>");
                        }
                    }


                    if(questionNumber==7 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. Which is the largest animal on earth?<br>1. Shark<br>2. Elephant<br>3. Blue whale<br>4. Giraffe</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==7 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. Which is the largest animal on earth?<br>1. Shark<br>2. Elephant<br>3. Blue whale<br>4. Giraffe</li><br>");
                        }
                    }


                    if(questionNumber==8 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. Similar body cells group together to form a ____.<br>1. Organ<br>2. Tissue<br>3. Blood vessels<br>4. Joints</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==8 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. Similar body cells group together to form a ____.<br>1. Organ<br>2. Tissue<br>3. Blood vessels<br>4. Joints</li><br>");
                        }
                    }


                    if(questionNumber==9 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. What energy emerges from motion?<br>1. Potential energy<br>2. Electrical energy<br>3. Kinetic energy<br>4. Gravitational energyr</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==9 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. What energy emerges from motion?<br>1. Potential energy<br>2. Electrical energy<br>3. Kinetic energy<br>4. Gravitational energyr</li><br>");
                        }
                    }

                    if(questionNumber==10 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. Which is the strongest sense in a dog?<br>1. Touch<br>2. Hearing<br>3. Smell<br>4. Taste</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==10 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            $("li#score").remove();
                            $("div.chatting ol").append('<li id="score" class="xy" style="line-height: 30px; padding:20px;"></li><br>');                        
                            document.getElementById("score").innerHTML = "Your total score "+score+"/10";
                            id++;
                            checkans = 0;    
                            questionNumber = 1;
                            flag=0;
                            currentClass=0;
                            sub=0; 
                            questionNumber = 1;
                            checkans=0;
                            score=0;

                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Start Test<br>1. Maths<br>2. Science</li><br>");
                            flag = 1; 
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. Which is the strongest sense in a dog?<br>1. Touch<br>2. Hearing<br>3. Smell<br>4. Taste</li><br>");
                        }
                    }


                }






                if(currentClass==4 && sub==2){


                    if(questionNumber==1 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Class 4 Science Test</li><br>");
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. The standard unit of measurement for energy is ____.<br>1. Newton<br>2. Amphere<br>3. Watt<br>4. Joule</li><br>");
                        checkans = 1;
                    }   
                    else if(questionNumber==1 && checkans==1){
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                                if(chatInput==4){
                                    score++;
                                }
                                else{

                                }
                                checkans = 0;    
                                questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. The standard unit of measurement for energy is ____.<br>1. Newton<br>2. Amphere<br>3. Watt<br>4. Joule</li><br>");
                        }
                    }
                    
                    if(questionNumber==2 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. Which biologist proposed the theory of evolution through natural selection?<br>1. Charles Darwin<br>2. Stephen Hawking<br>3. Francesco Redi<br>4. Alexander Fleming</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==2 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. Which biologist proposed the theory of evolution through natural selection?<br>1. Charles Darwin<br>2. Stephen Hawking<br>3. Francesco Redi<br>4. Alexander Fleming</li><br>");
                        }
                    }


                    if(questionNumber==3 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3.  What are animals, which eat both plants and animals, called?<br>1. Herbivores<br>2. Insectivores<br>3. Carnivores<br>4. Omnivores</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==3 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3.  What are animals, which eat both plants and animals, called?<br>1. Herbivores<br>2. Insectivores<br>3. Carnivores<br>4. Omnivores</li><br>");
                        }
                    }


                    if(questionNumber==4 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. The outward force, away from the center, felt by an object in circular motion is ____.<br>1. Centripetal force<br>2. Circular force<br>3. Centrifugal forces<br>4. Elastic force</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==4 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. The outward force, away from the center, felt by an object in circular motion is ____.<br>1. Centripetal force<br>2. Circular force<br>3. Centrifugal forces<br>4. Elastic force</li><br>");
                        }
                    }

                    if(questionNumber==5 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. What type of energy eventually depletes?<br>1. Kinetic energy<br>2. Non-renewable energy<br>3. Gravitational energy<br>4. Renewable energy</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==5 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. What type of energy eventually depletes?<br>1. Kinetic energy<br>2. Non-renewable energy<br>3. Gravitational energy<br>4. Renewable energy</li><br>");
                        }
                    }


                    if(questionNumber==6 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. A single piece of coiled DNA is called ____.<br>1. Nucleus<br>2. Ribosome<br>3. Cytoplasm<br>4. Chromosome</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==6 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. A single piece of coiled DNA is called ____.<br>1. Nucleus<br>2. Ribosome<br>3. Cytoplasm<br>4. Chromosome</li><br>");
                        }
                    }


                    if(questionNumber==7 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. Yeast is a type of ____.<br>1. Plant<br>2. Animal<br>3. Bacterium<br>4. Fungus</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==7 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. Yeast is a type of ____.<br>1. Plant<br>2. Animal<br>3. Bacterium<br>4. Fungus</li><br>");
                        }
                    }


                    if(questionNumber==8 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. Which is the closest planet to the sun?<br>1. Venus<br>2. Mars<br>3. Mercury<br>4. Earth</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==8 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. Which is the closest planet to the sun?<br>1. Venus<br>2. Mars<br>3. Mercury<br>4. Earth</li><br>");
                        }
                    }


                    if(questionNumber==9 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. A lion is most closely related to which of the following animals?<br>1. Dog<br>2. Raccoon<br>3. Wolf<br>4. Leopard</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==9 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. A lion is most closely related to which of the following animals?<br>1. Dog<br>2. Raccoon<br>3. Wolf<br>4. Leopard</li><br>");
                        }
                    }

                    if(questionNumber==10 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. Diabetes happens because of problems in which organ of the body?<br>1. Liver<br>2. Heart<br>3. Pancreas<br>4. Kidneys</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==10 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            $("li#score").remove();
                            $("div.chatting ol").append('<li id="score" class="xy" style="line-height: 30px; padding:20px;"></li><br>');                        
                            document.getElementById("score").innerHTML = "Your total score "+score+"/10";
                            id++;
                            checkans = 0;    
                            questionNumber = 1;
                            flag=0;
                            currentClass=0;
                            sub=0; 
                            questionNumber = 1;
                            checkans=0;
                            score=0;

                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Start Test<br>1. Maths<br>2. Science</li><br>");
                            flag = 1; 
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. Diabetes happens because of problems in which organ of the body?<br>1. Liver<br>2. Heart<br>3. Pancreas<br>4. Kidneys</li><br>");
                        }
                    }


                }



                if(currentClass==5 && sub==2){


                    if(questionNumber==1 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Class 5 Science Test</li><br>");
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. Which planet is known as the Red Planet?<br>1. Earth<br>2. Mars<br>3. Venus<br>4. Mercury</li><br>");
                        checkans = 1;
                    }   
                    else if(questionNumber==1 && checkans==1){
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                                if(chatInput==2){
                                    score++;
                                }
                                else{

                                }
                                checkans = 0;    
                                questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>1. Which planet is known as the Red Planet?<br>1. Earth<br>2. Mars<br>3. Venus<br>4. Mercury</li><br>");
                        }
                    }
                    
                    if(questionNumber==2 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. ____ is considered as father of Indian Space Program<br>1. C V Raman<br>2. Homi J Bhabha<br>3. Abdul Kalam<br>4. Vikram Sarabhai</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==2 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>2. ____ is considered as father of Indian Space Program<br>1. C V Raman<br>2. Homi J Bhabha<br>3. Abdul Kalam<br>4. Vikram Sarabhai</li><br>");
                        }
                    }


                    if(questionNumber==3 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. _____ was born on 15th September. This day is celebrated as Engineers Day in India.<br>1. V Radhakrishnan<br>2. Sir M Visvesvaraya<br>3. Abdul Kalam<br>4. Satish Dhawan</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==3 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>3. _____ was born on 15th September. This day is celebrated as Engineers Day in India.<br>1. V Radhakrishnan<br>2. Sir M Visvesvaraya<br>3. Abdul Kalam<br>4. Satish Dhawan</li><br>");
                        }
                    }


                    if(questionNumber==4 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. Longest bone in human body is ____<br>1. Femur<br>2. Stirrup<br>3. Tibia<br>4. Fibula</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==4 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>4. Longest bone in human body is ____<br>1. Femur<br>2. Stirrup<br>3. Tibia<br>4. Fibula</li><br>");
                        }
                    }

                    if(questionNumber==5 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. William Cullen made the first ____<br>1. Air Conditioner<br>2. Refrigerator<br>3. Solar Water heater<br>4. None of the above</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==5 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==2){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>5. William Cullen made the first ____<br>1. Air Conditioner<br>2. Refrigerator<br>3. Solar Water heater<br>4. None of the above</li><br>");
                        }
                    }


                    if(questionNumber==6 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. Wright Brothers invented ________.<br>1. Gun<br>2. Battle Tank<br>3. Ships<br>4. Airplane</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==6 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==4){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>6. Wright Brothers invented ________.<br>1. Gun<br>2. Battle Tank<br>3. Ships<br>4. Airplane</li><br>");
                        }
                    }


                    if(questionNumber==7 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. Solar System is in ___________ galaxy<br>1. Milky Way<br>2. Andromeda<br>3. Proxima Centauri<br>4. None of the above</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==7 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>7. Solar System is in ___________ galaxy<br>1. Milky Way<br>2. Andromeda<br>3. Proxima Centauri<br>4. None of the above</li><br>");
                        }
                    }


                    if(questionNumber==8 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. ____ is the most common element found in our universe.<br>1. Helium<br>2. Oxygen<br>3. Hydrogen<br>4. Nitrogen</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==8 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>8. ____ is the most common element found in our universe.<br>1. Helium<br>2. Oxygen<br>3. Hydrogen<br>4. Nitrogen</li><br>");
                        }
                    }


                    if(questionNumber==9 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. ________ is used in balloons as it is lighter than air<br>1. Helium<br>2. Oxygen<br>3. Nitrogen<br>4. Argon</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==9 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==1){
                                score++;
                            }
                            else{

                            }
                            checkans = 0;    
                            questionNumber++;
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>9. ________ is used in balloons as it is lighter than air<br>1. Helium<br>2. Oxygen<br>3. Nitrogen<br>4. Argon</li><br>");
                        }
                    }

                    if(questionNumber==10 && checkans==0)
                    {
                        $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. Speed of light in vacuum is ________<br>1. 1,00,000 km/sec<br>2. 2,00,000 km/sec<br>3. 3,00,000 km/sec<br>4. None of the above</li><br>");
                        checkans = 1;    
                    }
                    else if(questionNumber==10 && checkans==1)
                    {
                        if(chatInput==1||chatInput==2||chatInput==3||chatInput==4){
                            if(chatInput==3){
                                score++;
                            }
                            else{

                            }
                            $("li#score").remove();
                            $("div.chatting ol").append('<li id="score" class="xy" style="line-height: 30px; padding:20px;"></li><br>');                        
                            document.getElementById("score").innerHTML = "Your total score "+score+"/10";
                            id++;
                            checkans = 0;    
                            questionNumber = 1;
                            flag=0;
                            currentClass=0;
                            sub=0; 
                            questionNumber = 1;
                            checkans=0;
                            score=0;

                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Start Test<br>1. Maths<br>2. Science</li><br>");
                            flag = 1; 
                        }
                        else{
                            $("div.chatting ol").append("<li class='xy' style='width: 150px; line-height: 30px; padding: 20px;'>Please choose valid choice</li><br>");
                            $("div.chatting ol").append("<li class='xy' style='line-height: 30px; padding:20px;'>10. Speed of light in vacuum is ________<br>1. 1,00,000 km/sec<br>2. 2,00,000 km/sec<br>3. 3,00,000 km/sec<br>4. None of the above</li><br>");
                        }
                    }


                }





         
            }
           
        
    }

    $("div > form").on("submit", function (e) {
        e.preventDefault();
        chatFunctionality();
    });     
    })


window.setInterval(function() {
    var elem = document.getElementById('chatPlace');
    elem.scrollTop = elem.scrollHeight;
}, 50);
    


    $("div > form > #chat").on("click", function(){
        chatFunctionality();

    });