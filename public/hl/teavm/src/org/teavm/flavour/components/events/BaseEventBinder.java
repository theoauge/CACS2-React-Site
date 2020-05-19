/*
 *  Copyright 2015 Alexey Andreev.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.teavm.flavour.components.events;

import java.util.function.Consumer;
import org.teavm.flavour.templates.BindContent;
import org.teavm.flavour.templates.BindElementName;
import org.teavm.flavour.templates.ModifierTarget;
import org.teavm.flavour.templates.Renderable;
import org.teavm.jso.dom.events.Event;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.html.HTMLElement;

public abstract class BaseEventBinder<T extends Event> implements Renderable {
    private HTMLElement element;
    private String eventName;
    private EventListener<T> action;
    private boolean bound;

    public BaseEventBinder(ModifierTarget target) {
        this.element = target.getElement();
    }

    @BindElementName
    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    @BindContent
    public void setHandler(final Consumer<T> handler) {
        this.action = handler::accept;
    }

    @Override
    public void render() {
        if (!bound) {
            bound = true;
            element.addEventListener(eventName, wrapperListener);
        }
    }

    @Override
    public void destroy() {
        if (bound) {
            bound = false;
            element.removeEventListener(eventName, wrapperListener);
        }
    }

    private EventListener<T> wrapperListener = evt -> {
        action.handleEvent(evt);
        if (eventName.equals("submit")) {
            evt.preventDefault();
        }
    };
}
