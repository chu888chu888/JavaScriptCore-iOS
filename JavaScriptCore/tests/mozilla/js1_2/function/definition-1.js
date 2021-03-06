/* The contents of this file are subject to the Netscape Public
 * License Version 1.1 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of
 * the License at http://www.mozilla.org/NPL/
 *
 * Software distributed under the License is distributed on an "AS
 * IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * rights and limitations under the License.
 *
 * The Original Code is Mozilla Communicator client code, released March
 * 31, 1998.
 *
 * The Initial Developer of the Original Code is Netscape Communications
 * Corporation. Portions created by Netscape are
 * Copyright (C) 1998 Netscape Communications Corporation. All
 * Rights Reserved.
 *
 * Contributor(s): 
 * 
 */
/**
    File Name:          definition-1.js
    Reference:          http://scopus.mcom.com/bugsplat/show_bug.cgi?id=111284
    Description:        Regression test for declaring functions.

    Author:             christine@netscape.com
    Date:               15 June 1998
*/

    var SECTION = "function/definition-1.js";
    var VERSION = "JS_12";
    startTest();
    var TITLE   = "Regression test for 111284";

    writeHeaderToLog( SECTION + " "+ TITLE);

    var testcases = new Array();

    f1 = function() { return "passed!" }

    function f2() { f3 = function() { return "passed!" }; return f3(); }

    testcases[tc++] = new TestCase( SECTION,
        'f1 = function() { return "passed!" }; f1()',
        "passed!",
        f1() );

    testcases[tc++] = new TestCase( SECTION,
        'function f2() { f3 = function { return "passed!" }; return f3() }; f2()',
        "passed!",
        f2() );

    testcases[tc++] = new TestCase( SECTION,
        'f3()',
        "passed!",
        f3() );

    test();

function test() {
    for ( tc=0; tc < testcases.length; tc++ ) {
        testcases[tc].passed = writeTestCaseResult(
                            testcases[tc].expect,
                            testcases[tc].actual,
                            testcases[tc].description +" = "+
                            testcases[tc].actual );

        testcases[tc].reason += ( testcases[tc].passed ) ? "" : "wrong value ";
    }
    stopTest();
    return ( testcases );
}
