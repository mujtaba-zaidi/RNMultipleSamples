package com.rnmultiplesamples;

import android.widget.Toast;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class CallBackModule extends ReactContextBaseJavaModule {

    public CallBackModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CallBackExample";
    }

    @ReactMethod
    public void getData(Callback message) {
        message.invoke("From Callback.");
    }
}